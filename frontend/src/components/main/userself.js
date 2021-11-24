import React, {Component} from 'react';
import {connect} from "react-redux";
import Article from "./article";
import Follow from "./follow";
import Head from "./header_main";
import './userself.css';
import {Button, Row, Col, Menu, Avatar} from 'antd';
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
                <div className="account">
                    <Row className="title">
                        Account
                    </Row>
                    <div className="inner">
                        <Row>
                            <Col span={8} className="inner_ava">
                                <Avatar size={120} src = {this.props.avatar} />
                            </Col>
                            <Col span={14} offset={1} className="inner_txt">
                                <h3>{this.props.username }</h3>
                                <span>{this.props.userStatus}</span>
                            </Col>
                        </Row>
                        <Row style={{marginTop:"10px"}}>
                            <Col span={14}>
                                <input className="input-group-lg" type="text"  placeholder="New Status" id="status" ref={(node) => { new_status = node }}/>
                            </Col>
                            <Col span={8} offset={1} className="updatestatus">
                                <Button type="button" onClick={() =>this.props.change_status(new_status.value)}>Update Status</Button>
                            </Col>
                        </Row>
                    </div>
                </div>
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
        nav_landing: () => dispatch({type: 'NAV_LANDING'}),
        nav_profile: () => dispatch({type: 'NAV_PROFILE'}),
        change_status: (new_status) => dispatch(change_status(new_status)),
        init_articles: (new_json) => dispatch(init_articles(new_json)),
        add_articles: (json) => dispatch(add_articles(json))

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);