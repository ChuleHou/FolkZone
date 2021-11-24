const bodyParser = require('body-parser');
const Article = require('./schema').Article;
const Profile = require('./schema').Profile;
const User = require('./schema').User;

let idNumber = 3;
let newArticle = {}
let articleList = {
    'articles' :[
        {
            id: 0,
            author: "Mack",
            text: "Text1",
            date: new Date().toString(),
            comments: []
        },
        {
            id: 1,
            author: "Jack",
            text: "Text2",
            date: new Date().toString(),
            comments: []
        },
        {
            id: 2,
            author: "Zack",
            text: "Text3",
            date: new Date().toString(),
            comments: []
        }]
}
function addArticle (req, res) {
    let username = req.loggedUser.username;
    let text = req.body.text;
    if (!text) {
        return res.status(400).send("Missing text")
    }
    Article.find({username:username}).exec(function (err, article){
        if (err) {
            return console.log(err)
        } else {
            let oldArticle = article.length
            new Article({
                pid:oldArticle + 1,
                author: username,
                date: new Date().getTime(),
                text: text
            }).save(function (err, article) {
                if (err) {
                    return console.log(err)
                } else {
                    let msg = {articles: article}
                    res.status(200).send(msg)
                }
            })
        }
    })
}

function getArticles (req, res ) {
    let username = req.loggedUser.username;
    let pid = req.params.id;
    console.log(pid)
    if(pid) {
        Article.find({pid: pid}).exec(function (err, articles) {
            if(err) {
                return console.log(err)
            }
            if(!articles || articles.length === 0) {
                return res.status(401).send('Article is not exist')
            }
            let msg = {articles: articles};
            return res.status(200).send(msg);
        })
    } else {
        Profile.find({username: username}).exec(function (err, profile){
            let followingInfo = profile[0].following
            followingInfo.push(username)
            Article.find({author: {$in: followingInfo}}).exec(function (err, followingArticle){
                if (err) {
                    return console.log(err)
                } else {
                    return res.status(200).send({articles: followingArticle})
                }
            })
        })
    }

}

function putArticles (req, res) {
    let username = req.loggedUser.username;
    let text = req.body.text;
    let pid = req.params.id;
    let commentId = req.body.commentId;

    if (!pid) {
        return res.status(400).send("Missing text")
    }
    Article.find({pid:pid}).exec(function (err, article){
        if (err) {
            return console.log(err)
        }
        if (!article) {
            return res.status(401).send("Text is not exist")
        }
        if(!commentId) {
            Article.findOneAndUpdate(
                {pid:pid},
                {$set: {test: text}},
                function (err, article) {
                    if(err) {
                        return console.log(err)
                    }
                }
            )
        } else {
            if (commentId === -1) {
                articleList.articles.comments.push({
                    id: articleList.articles.length + 1,
                    text:text
                })
            }
        }
    })
}

module.exports = app => {
    app.use(bodyParser.json());

    app.post('/article', addArticle);
    app.get('/articles/:id?', getArticles);
    app.get('/articles/:id', putArticles);
}