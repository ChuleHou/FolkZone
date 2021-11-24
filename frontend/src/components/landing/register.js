import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, message} from 'antd';
import './register.css'
import 'antd/dist/antd.css';
import {set_error_reg, new_user, set_dummy } from "../../actions";
import {Link} from "react-router-dom";
import { withRouter } from 'react-router-dom';

let userInfo = {
    username: '',
    email: '',
    tel: '',
    bday: '',
    zipCode: '',
    password: '',
    passwordc: '',
}

let reg_error = "";

const register_validate_age = (birthday)=>{
    let now = new Date();
    let birthdayArr = birthday.split('-')
    let birth = new Date(birthdayArr[0], birthdayArr[1],birthdayArr[2]);
    let dist_year = now.getYear()-birth.getYear();
    let less18 = 0;
    if(dist_year<18){
        less18 = 1;
    }else if(dist_year === 18){
        if(now.getMonth()<birth.getMonth()){
            less18 = 1;
        }else if(now.getMonth()===birth.getMonth()){
            if(now.getDay()<birth.getDay()){
                less18 = 1;
            }
        }
    }
    return less18 === 0
}

const validate = (user_array) => {
    let user_validate = user_array.findIndex(function(post, index) {
        if(post.username === userInfo.username.value)
            return true;
    });
    if (user_validate !== -1){
        message.error('User already existed');
        reg_error = "User already existed";
        return false
    }
    else if (userInfo.password.value !== userInfo.passwordc.value){
        message.error("Password doesn't match");
        reg_error = "Passwords doesn't match";
        return false
    }
    else if (!register_validate_age(userInfo.bday.value)){
        message.error('Must be 18 years old');
        reg_error = "Must be 18 years old";
        return false
    }
    else{
        reg_error = "";
        return true
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        location: state.location,
        errorMSG: reg_error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        set_dummy: (res) => dispatch(set_dummy(res)),
        new_user: (userInfo) => dispatch(new_user(userInfo)),
        set_error_reg: (reg_error) => dispatch(set_error_reg(reg_error))
    }
};

class Register extends Component {
    render() {
        let user_array = this.props.dummyUsers;
        return (
            <div>
                <form className="row g-3" onSubmit={
                    (event)=> {
                        event.preventDefault();
                        if (validate(user_array)) {
                            this.props.set_error_reg("");
                            this.props.new_user(userInfo);
                            this.props.history.push('/Main')
                        }
                        else{
                            this.props.set_error_reg(reg_error);
                        }
                    }
                }>
                    <h1>welcome to folkZone</h1>
                    <div>
                        <div className='wrapper_signup_form'>
                            <div className="signup_form_item">
                                <label htmlFor="UsernameR" className="form-label">Username:</label>
                                <input type="text"  placeholder="Username" id="usernameR" className="form-control"
                                       required ref={(node) => { userInfo.username = node }}/>
                            </div>
                            <div className="signup_form_item">
                                <label htmlFor="phone" className="form-label">Telephone:</label>
                                <input type="tel"  placeholder="xxx-xxx-xxxx" id="phone" className="form-control"
                                       pattern="\d\d\d-\d\d\d-\d\d\d\d"
                                       required ref={(node) => { userInfo.tel = node }}/>
                            </div>
                            <div className="signup_form_item">
                                <label htmlFor="email" className="form-label">Email Add:</label>
                                <input type="email"  placeholder="xxx@xxx.xxx" id="email" className="form-control"
                                       pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                                       required ref={(node) => { userInfo.email = node }}/>
                            </div>
                            <div className="signup_form_item">
                                <label htmlFor="zipCode" className="form-label">Zip Code:</label>
                                <input type="text"  placeholder="xxxxx" id="zipCode" className="form-control"
                                       pattern="[0-9]{5}"
                                       required ref={(node) => { userInfo.zipCode = node }}/>
                            </div>
                            <div className="signup_form_item">
                                <label htmlFor="bday" className="form-label">Birthday:</label>
                                <input type="date"   id="bday" className="form-control"
                                       required ref={(node) => { userInfo.bday = node }}/>
                            </div>
                            <div className="signup_form_item">
                                <label htmlFor="PasswordR" className="form-label">Password:</label>
                                <input type="password" placeholder="Password" name="password" id="passwordR" className="form-control"
                                       required ref={(node) => { userInfo.password = node }}/>
                            </div>
                            <div className="signup_form_item">
                                <label htmlFor="PasswordRC" className="form-label">Password Conformation:</label>
                                <input type="password" placeholder="Password Conformation" name="passwordc" id="passwordRc" className="form-control"
                                       required ref={(node) => { userInfo.passwordc = node }}/>
                            </div>
                            <p className="badge-warning">{this.props.errorMSG}</p>
                            <div>
                                <Button className="button_login"><Link to="/Login">Sign In</Link></Button>
                                <Button className="button_signup" htmlType="submit" type="primary" >Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(
    connect(
        mapStateToProps, mapDispatchToProps
    )(Register)
)