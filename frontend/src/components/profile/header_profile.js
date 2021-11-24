import React, {Component} from 'react';
import {connect} from "react-redux";
import {Menu} from 'antd';
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

class Head extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="profile_page" icon={<ProfileOutlined />}>
                    <Link to='/Main'>Main Page</Link>
                </Menu.Item>
                <Menu.Item key="login_page" icon={<LoginOutlined />}>
                    <Link to='/Login'>Log Out</Link>
                </Menu.Item>
            </Menu>
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Head);