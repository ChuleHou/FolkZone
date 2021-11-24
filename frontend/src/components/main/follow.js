import React, {Component} from 'react';
import {new_user, set_error_reg, remove_f, add_f} from "../../actions";
import {connect} from "react-redux";
import {Button, Row, Col, Menu, Avatar} from 'antd';
import 'antd/dist/antd.css';
import './follow.css'

let add_follow;
class Follow extends Component {
    render() {
        return (
            <div className="account">
                <Row className="title">
                    Following
                </Row>
                <div className="inner">
                    <Row style={{marginTop: '10px'}}>
                        <Col span={14}>
                            <input placeholder="Find User" type = "text" ref={(node) => { add_follow = node }}/>
                        </Col>
                        <Col span={8} offset={1} className="button_followuser">
                            <Button type = "primary" onClick={() => this.props.add_f(add_follow.value)} value="Add">Add Follower</Button>
                        </Col>
                    </Row>
                </div>

                    {this.props.following.map((follow, i) =>
                        <div className="inner followItem">
                            <Row>
                                <Col span={8} className="inner_ava">
                                    <Avatar size={90} src = {this.props.avatar} />
                                </Col>
                                <Col span={14} offset={1} className="inner_txt">
                                    <div style={{marginBottom: '10px'}}>
                                        <b>{this.props.dummyUsers[follow-1].name}</b>
                                        <br/>
                                        <span>{this.props.dummyUsers[follow-1].company.catchPhrase}</span>
                                    </div>
                                    <Button  onClick={() => this.props.remove_f(follow)}>Unfollow</Button>
                                </Col>
                            </Row>
                        </div>
                    )}
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
        remove_f: (follow) =>  dispatch(remove_f(follow)),
        add_f: (add_follow) => dispatch(add_f(add_follow))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);