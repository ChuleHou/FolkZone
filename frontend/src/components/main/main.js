import React, {Component} from 'react';
import {connect} from "react-redux";
import Article from "./article";
import Follow from "./follow";
import Head from "./header_main";
import UserSelf from "./userself";
import './main.css';
import {Row, Col} from 'antd';
import {add_articles, change_status, init_articles} from "../../actions";

let new_status;
let article_obj =   {
    "userId": 1,
    "id": 1,
    "title": "New Article",
    "body": "New Context"
};
class Main extends Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res =>
            {
                this.props.init_articles(res)
                let array_articles = this.props.articles_to_show;
                this.props.add_articles(array_articles)
            }
        );
    }
    render() {
        return (
            <>
                <Head />
                <center><h1>Main Page</h1></center>
            <div>
                <Row>
                    <Col span={6}>
                        <UserSelf />
                        <Follow/>
                    </Col>
                    <Col span={17} offset={1}>
                        <Article/>
                    </Col>
                </Row>
            </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        change_status: (new_status) => dispatch(change_status(new_status)),
        init_articles: (new_json) => dispatch(init_articles(new_json)),
        add_articles: (json) => dispatch(add_articles(json))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);