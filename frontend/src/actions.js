export const SET_ERROR_REG = "SET_ERROR_REG"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const NEW_USER = "NEW_USER"
export const ADD_ARTICLES = "ADD_ARTICLES"
export const UPDATE_USER = "UPDATE_USER"
export const NEW_STATUS = "NEW_STATUS"
export const ADD_ARTICLES_INIT = "ADD_ARTICLES_INIT"
export const SHOW_COMMENTS = "SHOW_COMMENTS";
export const SET_DUMMY = "SET_DUMMY"
export const SEARCH_BY = "SEARCH_BY"
export const REMOVE_F = "REMOVE_F"
export const ADD_F = "ADD_F"

export function add_f(add_follow) {
    return {type: ADD_F, add_follow}
}
export function remove_f(follow) {
    return {type: REMOVE_F, follow}
}

export function  search_by(val){
    return {type: SEARCH_BY, val}
}

export function set_dummy(res) {
    return {type: SET_DUMMY, res}
}

export function init_articles(new_json){
    return {type: ADD_ARTICLES_INIT, new_json}
}
export function show_comments_vis(){
    return {type: SHOW_COMMENTS}
}

export function change_status(new_status){
    return {type: NEW_STATUS, new_status}
}

export function update_user(userInfo_profile) {
    return {type: UPDATE_USER, userInfo_profile}
}

export function add_articles(json) {
    return {type: ADD_ARTICLES, json}
}

export function new_user(userInfo) {
    return {type: NEW_USER, userInfo}
}

export function log_in(id) {
    return {type: LOGIN, id}
}
export function log_out(id) {
    return {type: LOGOUT, id}
}

export function set_error_reg(error_msg){
    console.log(error_msg)
    return {type: SET_ERROR_REG, error_msg}
}