import React from 'react';

import {
    SET_ERROR_REG,
    LOGIN,
    LOGOUT,
    NEW_USER,
    ADD_ARTICLES,
    UPDATE_USER,
    NEW_STATUS, ADD_ARTICLES_INIT, SHOW_COMMENTS,SET_DUMMY, SEARCH_BY, REMOVE_F, ADD_F,
} from "./actions";
import {createStore} from "redux";

const pageState = {
    username: 'dummyUser',
    avatar:"",
    id: 1,
    password:'',
    email: '',
    tel: '',
    bday: '',
    zipCode: '',
    errorMSG: '',
    userStatus: 'initial status',
    following: [1],
    articles: [],
    articles_to_show: [],
    dummyUsers : []
};

export function draftApp(state = pageState, action) {
    switch (action.type) {
        case SET_ERROR_REG:{
            return{
                ...state,
                errorMSG: action.error_msg
            }
        }
        case LOGIN:{
            let users = state.dummyUsers
            return{
                ...state,
                avatar: users[action.id].avatar,
                username: users[action.id].username,
                id: action.id+1,
                password:users[action.id].password,
                email: users[action.id].email,
                tel: users[action.id].phone,
                bday: '1999-09-19',
                zipCode: users[action.id].address.zipcode,
                errorMSG: '',
                userStatus: users[action.id].company.catchPhrase,
                following: [(action.id+1)%10 + 1, (action.id+2)%10 + 1, (action.id+3)%10 + 1],
            }
        }
        case LOGOUT: {
            return{
                ...state,
                username: 'dummyUser',
                avatar:"",
                id: 20,
                password:'',
                email: '',
                tel: '',
                bday: '',
                zipCode: '',
                errorMSG: '',
                userStatus: 'initial status',
                following: [1],
                articles: [],
                articles_to_show: [],
                dummyUsers : []
            }

        }
        case ADD_F:{
            let followers = []
            for (let i = 0; i < state.following.length; i++){
                followers.push(state.following[i])
            }
            //followers.push(action.add_follow)
            let follower_id = parseInt(action.add_follow)
            followers.push(follower_id)

            let array_articles = []
            for (let i = 0; i < state.articles_to_show.length; i++) {
                if(state.articles_to_show[i].userId === state.id || followers.includes(state.articles_to_show[i].userId)) {
                    array_articles.push(state.articles_to_show[i])
                }
            }
            return{
                ...state,
                following: followers,
                articles: array_articles
            }
        }
        case REMOVE_F:{
            let followers = []
            for (let i = 0; i < state.following.length; i++){
                if (state.following[i] !== action.follow){
                    followers.push(state.following[i])
                }
            }

            let array_articles = []
            for (let i =0; i < state.articles.length; i++) {
                if (state.articles[i].userId !== action.follow) {
                    array_articles.push(state.articles[i])
                }
            }
            return {
                ...state,
                following: followers,
                articles: array_articles
            }
        }
        case NEW_USER:{
            let new_users = action.userInfo;
            return {
                ...state,
                username: new_users.username.value,
                password: new_users.password.value,
                email: new_users.email.value,
                tel: new_users.tel.value,
                bday: new_users.bday.value,
                zipCode: new_users.zipCode.value,
            }
        }
        case SET_DUMMY:{
            let users = []
            for (let i = 0; i < action.res.length; i++){
                action.res[i].avatar = "https://joeschmoe.io/api/v1/random"
                action.res[i].password = action.res[i].address.street
                users.push(action.res[i])
            }
            return {
                ...state,
                dummyUsers: users
            }
        }
        case UPDATE_USER:{
            let update_username = state.username;
            let update_password = state.password;
            let update_email = state.email;
            let update_tel = state.tel;
            let update_birthday = state.bday;
            let update_zipcode = state.zipCode;
            let update_user_info = action.userInfo_profile;

            if (update_user_info.username.value !== ''){
                update_username = update_user_info.username.value;
            }
            if (update_user_info.password.value !== ''){
                update_password = update_user_info.password.value;
            }
            if (update_user_info.email.value !== ''){
                update_email = update_user_info.email.value;
            }
            if (update_user_info.tel.value !== ''){
                update_tel = update_user_info.tel.value;
            }
            if (update_user_info.zipCode.value !== ''){
                update_zipcode = update_user_info.zipCode.value;
            }
            return {
                ...state,
                username: update_username,
                password:update_password,
                email: update_email,
                tel: update_tel,
                bday: update_birthday,
                zipCode: update_zipcode,
            }
        }

        case NEW_STATUS:{
            return {
                ...state,
                userStatus: action.new_status
            }
        }
        case ADD_ARTICLES_INIT:{
            let array_article = []
            for (let i = 0; i < action.new_json.length; i++){
                action.new_json[i].img = "https://picsum.photos/seed/picsum/400/200"
                action.new_json[i].timestamp = 1111111111
                action.new_json[i].author = state.dummyUsers[action.new_json[i].userId - 1].name
                action.new_json[i].comments = ['Comment1', 'Comment2'];
                array_article.push(action.new_json[i])
            }
            return {
                ...state,
                articles_to_show: array_article
            }
        }
        case SHOW_COMMENTS:{
            let temp = state.show_comments
            return {
                ...state,
                show_comments:(!temp)
            }
        }
        case SEARCH_BY:{
            let array_article = []
            for (let i = 0; i < state.articles.length; i++){
                if (state.articles[i].author.includes(action.val.value) || state.articles[i].title.includes(action.val.value) || state.articles[i].body.includes(action.val.value)){
                    array_article.push(state.articles[i])
                }
            }
            return {
                ...state,
                articles: array_article
            }
        }
        case ADD_ARTICLES:{
            let array_article = []
            let array_article1 = []
            for (let i = 0; i < action.json.length; i++){
                array_article1.push(action.json[i])
                if (action.json[i].userId === state.id || state.following.includes(action.json[i].userId)){
                    array_article.push(action.json[i])
                }
            }
            array_article.sort(function(a, b) {
                var keyA = a.timestamp,
                    keyB = b.timestamp;
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });
            return {
                ...state,
                articles: array_article,
                articles_to_show: array_article1
            }
        }
    }
    return  state;
}

const store = createStore(draftApp);
export default store;

