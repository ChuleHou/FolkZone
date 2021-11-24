const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    salt: {
        type: String,
        required: [true, "salt is required"]
    },
    hash: {
        type: String,
        required: [true, "hash is required"]
    }
});
const User = mongoose.model('User', userSchema);

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"]
    },
    dob: {
        type:Date,
        required: [true, "dob is required"]
    },
    headline: {
        type: String,
        default: "default headline"
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    zipcode: {
        type: String,
        required: [true, "zipcode is required"]
    },
    avatar: {
        type: String,
        default: "default avatar"
    },
    following: {
        type: [String],
        default: []
    }
});
const Profile = mongoose.model('Profile',profileSchema);

const articleSchema =  new mongoose.Schema({
    pid: {
        type: Number
    },
    author: {
        type: String,
        required: [true, "author is required"]
    },
    date: {
        type: Date,
        required: [true, "date is required"]
    },
    text: {
        type: String,
        default: 'default text'
    },
    comments: {
        type: [String],
        default: []
    }
});
const Article = mongoose.model('Article', articleSchema);


module.exports.User = User;
module.exports.Profile = Profile;
module.exports.Article = Article;