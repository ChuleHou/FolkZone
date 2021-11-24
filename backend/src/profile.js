const Profile = require('./schema').Profile
// const profile = {
//     username: 'chule',
//     headline: 'chule headline',
//     email: 'ch83@rice.edu',
//     zipcode: '77030',
//     dob: '19970414',
//     avatar: 'chule avatar',
// }

function getHeadline (req, res) {
    let username = req.params.user ? req.params.user : req.loggedUser.username;
    Profile.find({username:username}).exec(function (err, profile) {
        if(err) {
            return console.log(err)
        } else {
            if (!profile || profile.length === 0) {
                return res.status(401).send('User is not exists');
            }
            let profileInfo = profile[0];
            let msg = {username: username, headline: profileInfo.headline}
            res.status(200).send(msg)
        }
    })
}

function putHeadline (req, res) {
    let username = req.loggedUser.username;
    let headline = req.body.headline;

    if(!headline) {
       return res.status(400).send("Missing headline")
    }
    Profile.findOneAndUpdate(
        {username: username},
        {$set: {headline: headline}},
        function (err, profile) {
            if (err) {
                return console.log(err);
            }
            let msg = {username: username, headline: headline}
            res.status(200).send(msg);
        }
    )
}

function getEmail (req, res) {
    let username = req.params.user ? req.params.user : req.loggedUser.username;
    Profile.find({username:username}).exec(function (err, profile) {
        if(err) {
            return console.log(err)
        } else {
            if (!profile || profile.length === 0) {
                return res.status(401).send('User is not exists');
            }
            let profileInfo = profile[0];
            let msg = {username: username, email: profileInfo.email}
            res.status(200).send(msg)
        }
    })
}

function putEmail (req, res) {
    let username = req.loggedUser.username;
    let email = req.body.email;

    if(!email) {
        return res.status(400).send("Missing email")
    }
    Profile.findOneAndUpdate(
        {username: username},
        {$set: {email: email}},
        function (err, profile) {
            if (err) {
                return console.log(err);
            }
            let msg = {username: username, email: email}
            res.status(200).send(msg);
        }
    )
}

function getDob (req, res) {
    let username = req.params.user ? req.params.user : req.loggedUser.username;
    Profile.find({username:username}).exec(function (err, profile) {
        if(err) {
            return console.log(err)
        } else {
            if (!profile || profile.length === 0) {
                return res.status(401).send('User is not exists');
            }
            let profileInfo = profile[0];
            let msg = {username: username, dob: profileInfo.dob}
            res.status(200).send(msg)
        }
    })
}

function getZipcode (req, res) {
    let username = req.params.user ? req.params.user : req.loggedUser.username;
    Profile.find({username:username}).exec(function (err, profile) {
        if(err) {
            return console.log(err)
        } else {
            if (!profile || profile.length === 0) {
                return res.status(401).send('User is not exists');
            }
            let profileInfo = profile[0];
            let msg = {username: username, zipcode: profileInfo.zipcode}
            res.status(200).send(msg)
        }
    })
}

function putZipcode (req, res) {
    let username = req.loggedUser.username;
    let zipcode = req.body.zipcode;

    if(!zipcode) {
        return res.status(400).send("Missing dob")
    }
    Profile.findOneAndUpdate(
        {username: username},
        {$set: {zipcode: zipcode}},
        function (err, profile) {
            if (err) {
                return console.log(err);
            }
            let msg = {username: username, zipcode: zipcode}
            res.status(200).send(msg);
        }
    )
}

function getAvatar (req, res) {
    let username = req.params.user ? req.params.user : req.loggedUser.username;
    Profile.find({username:username}).exec(function (err, profile) {
        if(err) {
            return console.log(err)
        } else {
            if (!profile || profile.length === 0) {
                return res.status(401).send('User is not exists');
            }
            let profileInfo = profile[0];
            let msg = {username: username, avatar: profileInfo.avatar}
            res.status(200).send(msg)
        }
    })
}

function putAvatar (req, res) {
    let username = req.loggedUser.username;
    let avatar = req.body.avatar;

    if(!avatar) {
        return res.status(400).send("Missing email")
    }
    Profile.findOneAndUpdate(
        {username: username},
        {$set: {avatar: avatar}},
        function (err, profile) {
            if (err) {
                return console.log(err);
            }
            let msg = {username: username, avatar: avatar}
            res.status(200).send(msg);
        }
    )
}

module.exports=(app) => {
    app.get('/headline/:user?', getHeadline)
    app.put('/headline', putHeadline)

    app.get('/email/:user?', getEmail)
    app.put('/email', putEmail)

    app.get('/dob/:user?', getDob)

    app.get('/zipcode/:user?', getZipcode)
    app.put('/zipcode', putZipcode)

    app.get('/avatar/:user?', getAvatar)
    app.put('/avatar', putAvatar)
}