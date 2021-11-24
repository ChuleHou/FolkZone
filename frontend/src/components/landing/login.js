import React, {Component} from 'react';
import {connect} from 'react-redux';
import './login.css';
import { Button, message } from 'antd';
import {set_error_reg, log_in, set_dummy} from "../../actions";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

let username, password;
let log_error = "";

const validate = (user_array) => {
    console.log(user_array)
    const user_validate = user_array.findIndex(function (post, index) {
        if (post.username === username.value) {
            return true;
        } else {
            return false;
        }
    });
    if (user_validate === -1){
        return user_validate
    }
    if (password.value === user_array[user_validate].password) {
        return user_validate
    } else {
        return -1
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        errorMSG: log_error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_dummy: (res) => dispatch(set_dummy(res)),
        set_error_reg: (log_error) => dispatch(set_error_reg(log_error)),
        log_in: (id) => dispatch(log_in(id)),
    }
};

class Login extends Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res =>
            {
                this.props.set_dummy(res)
            }
        );
    }
    render() {
        let user_array = this.props.dummyUsers;
        return (
            <div className="wrapper_login">
                <form className='login'
                    onSubmit={(event) => {
                    event.preventDefault();
                    let validated = validate(user_array);
                    if (validated >= 0){
                        message.success('Sign in Success！');
                        this.props.set_error_reg(log_error)
                        this.props.log_in(validated)
                        this.props.history.push('/Main')
                    }
                    else{
                        message.error('Sign in Failed！');
                        log_error = "Username or Password wrong"
                        this.props.set_error_reg(log_error)
                    }
                }
                    }
                >
                    <h1 className="title_login_page">welcome to folkZone</h1>
                    <div>
                        <div className="wrapper_login_form">
                            <div className="login_form_item">
                                <label htmlFor="Username">Username:</label>
                                <input type="text"  placeholder="Username" id="id_username" className="form-control"
                                       required ref={(node) => { username = node }}/>
                            </div>

                            <div className="login_form_item">
                                <label htmlFor="Password">Password:</label>
                                <input type="password"  placeholder="Password" name="password" id="id_password" className="form-control"
                                       required ref={(node) => { password = node }}/>
                            </div>
                            <p className="warning_login_page">{this.props.errorMSG}</p>
                            <div>
                                <Button className="button_signup"><Link to="/Register">Sign Up</Link></Button>
                                <Button className="button_signin" type = "primary" id="id_login_button" htmlType="submit">Sign In</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(
    connect (
    mapStateToProps,mapDispatchToProps
    )(Login)
)