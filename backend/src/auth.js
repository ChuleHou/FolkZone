const md5 = require('md5');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {compileTrust} = require("express/lib/utils");
const User = require('./schema').User;
const Profile = require('./schema').Profile;

let sessionUser = {};
let cookieKey = "sid";
let userObj = {};

// let passwordTest = '1234';
// let saltTest = md5('19970414');
// let userObjs = {
//     'chuleTest':{
//         username:'chuleTest',
//         salt:saltTest,
//         hashPassword:md5(saltTest + passwordTest)
//     }
// };

const hashPassword = (salt, password) => {
    return md5(salt + password);
}

function register(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let dob = req.body.dob;
    let zipcode = req.body.zipcode;

    // Invalid username, password, Email, dob, zipcode
    if (!username || !password || !email || !dob || !zipcode) {
        return res.status(400).send("Invalid Register Info");
    }
    User.find({username: username}).exec(function (err,user){
        if(err) {
            return console.log(err)
        } else {
            if(user.length !== 0) {
                return res.status(401).send('User is already exists')
            }
            let salt = username + new Date().getTime();
            let hash = hashPassword(salt, password);
            new User({username, salt, hash}).save(function (err) {
                if(err) {
                    return console.log(err);
                }
            });
            new Profile({username, email, dob, zipcode}).save(function (err) {
                if(err) {
                    return console.log(err)
                }
            });
            let msg = {result: 'success', username: username};
            return  res.status(200).send(msg);
        }
    })
}

function login(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    // supply username and password
    if (!username || !password) {
        return res.status(400).send('Unauthorized!');
    }

    User.find({username: username}).exec(function (err, user) {
        if(err) {
            return console.log(err)
        } else {
            if(!user || user.length === 0) {
                return res.status(401).send("User not registered")
            }
            let userObj = user[0]
            if(md5(userObj.salt + password) === userObj.hash) {
                let sessionKey = md5(userObj.username + new Date().getTime())
                sessionUser[sessionKey] = userObj;
                res.cookie(cookieKey, sessionKey, { maxAge: 3600 * 1000, httpOnly: true})
                let msg = {username: username, result:'success'}
                return res.status(200).send(msg)
            } else {
                return res.status(401).send("Login failed")
            }
        }
    })
}

function password(req, res) {
    let username = req.loggedUser.username;
    let password = req.body.password;
    if(!username || !password) {
        res.status(400).send('Unauthorized!');
        return
    }
    let salt = username + new Date().getTime();
    let hash = hashPassword(salt, password);
    let newPassword = {salt: salt, hash: hash};
    User.findOneAndUpdate(
        {username:username},
        {$set:newPassword},
        function (err, user) {
            if(err) {
                return console.log(err)
            }
            let msg = {username:username, result: "Password Updated!"}
            res.status(200).send(msg);
        })
}

function isLoggedIn (req, res, next){
    if (!req.cookies) {
        return res.status(401);
    }
    let sid = req.cookies[cookieKey];
    let loggedUser = sessionUser[sid];
    if (loggedUser) {
        req.loggedUser = loggedUser;
        next();
    }
    else {
        return res.status(401);
    }
}

function logout(req, res) {
    userObj = {}
    sessionUser = {}
    res.clearCookie(cookieKey, {maxAge:0,httpOnly:true});
    let sid = req.cookies[cookieKey];
    delete sessionUser[sid];
    return res.status(200).send("OK")
}

module.exports = (app) => {
    app.use(bodyParser.json());

    app.post('/register', register);
    app.post('/login', login);
    app.use(isLoggedIn);
    app.put('/password', password);
    app.put('/logout', logout)
}
