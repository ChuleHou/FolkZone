import React, {Component} from 'react';
import {connect} from 'react-redux';
import {post_article} from "../../actions";
import Article from "./article";

let title, body, timestamp;
let article_obj =   {
    "userId": 1,
    "id": 1,
    "title": "New Article",
    "body": "New Post"
};

class PostArticle extends Component {

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        articles: state.articles
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(
    mapStateToProps,mapDispatchToProps
)(PostArticle);
