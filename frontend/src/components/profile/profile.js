import React, {Component} from 'react';
import {connect} from "react-redux";
import Head from './header_profile'
import './profile.css'
import {set_error_reg, update_user} from "../../actions";
import {Button, Row, Col, Menu, Avatar, Upload, message} from 'antd';
import {UploadOutlined} from "@ant-design/icons";

let userInfo_profile = {
    username: '',
    email: '',
    tel: '',
    bday: '',
    zipCode: '',
    password: '',
    passwordc: '',
}
let reg_error = "";

const mapStateToProps = (state) => {
    return {
        ...state,
        errorMSG: reg_error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        nav_main: () => dispatch({type: 'NAV_MAIN'}),
        set_error_reg: (reg_error) => dispatch(set_error_reg(reg_error)),
        update_user:(userInfo_profile) => dispatch(update_user(userInfo_profile))
    }
};

class Profile extends Component {
    render() {
        return (
            <div>
                <Head />
                <center><h1 className="card-header">Profile Page</h1></center>
                <Row>
                    <Col span={12} className="colbox">
                        <div className="userImg">
                            <Avatar size={90} src = {this.props.avatar} />
                        </div>
                        <div className='leftUpload'>
                            <Upload>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                        </div>
                        <form onSubmit={
                            (event)=> {
                                event.preventDefault();
                                if (validate()) {
                                    this.props.set_error_reg("");
                                    this.props.update_user(userInfo_profile);
                                }
                                else{

                                    this.props.set_error_reg(reg_error);
                                }
                            }
                        }>
                            <div className="wrapper_profile_form">
                            <div className="profile_form_item">
                                <label htmlFor="UsernameR" className="form-label">Username:</label>
                                <input type="text"  placeholder="username" id="usernameR" className="form-control"
                                       ref={(node) => { userInfo_profile.username = node }}/>
                            </div>
                            <div className="profile_form_item">
                                <label htmlFor="phone" className="form-label">Telephone:</label>
                                <input type="tel"  placeholder="xxx-xxx-xxxx" id="phone" className="form-control"
                                       pattern="\d\d\d-\d\d\d-\d\d\d\d"  ref={(node) => { userInfo_profile.tel = node }}/>
                            </div>
                            <div className="profile_form_item">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email"  placeholder="xx@xx.xxx" id="email" className="form-control"
                                       pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"  ref={(node) => { userInfo_profile.email = node }}/>
                            </div>
                            <div className="profile_form_item">
                                <label htmlFor="zipCode" className="form-label">ZipCode:</label>
                                <input type="text"  placeholder="xxxxx" id="zipCode" className="form-control"
                                       pattern="[0-9]{5}"  ref={(node) => { userInfo_profile.zipCode = node }}/>
                            </div>
                            <div className="profile_form_item">
                                <label htmlFor="bday" className="form-label">Birthday:</label>
                                <input type="date"   id="bday" className="form-control"
                                       ref={(node) => { userInfo_profile.bday = node }}/>
                            </div>
                            <div className="profile_form_item">
                                <label htmlFor="PasswordR" className="form-label">Password:</label>
                                <input type="password" placeholder="Password" name="password" id="passwordR" className="form-control"
                                       ref={(node) => { userInfo_profile.password = node }}/>
                            </div>
                            <div className="profile_form_item">
                                <label htmlFor="PasswordRC" className="form-label">Password Conformation:</label>
                                <input type="password" placeholder="Password Conformation" name="passwordc" id="passwordRc" className="form-control"
                                       ref={(node) => { userInfo_profile.passwordc = node }}/>
                            </div>
                            <br/>
                            <p className="badge-warning"> {this.props.errorMSG} </p>
                            <div className="profile_form_item">
                                <Button type="primary" htmlType="submit"  danger style={{width:'150px'}}>Update</Button>
                            </div>
                            </div>
                        </form>
                    </Col>

                    <Col span={12} className="colbox">
                        <div className="wrapper_profile_form_left">
                            <div className="profile_form_item">{this.props.username}</div>
                            <div className="profile_form_item">{this.props.tel}</div>
                            <div className="profile_form_item">{this.props.email}</div>
                            <div className="profile_form_item">{this.props.zipCode}</div>
                            <div className="profile_form_item">{this.props.bday}</div>
                            <div className="profile_form_item">{"*".repeat(this.props.password.length) }</div>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

const checkAge = (birthday)=>{
    let now = new Date();
    let birthdayArr = birthday.split('-')
    let birth = new Date(birthdayArr[0], birthdayArr[1],birthdayArr[2]);
    let dist_year = now.getYear()-birth.getYear();
    let under_18 = 0;
    if(dist_year<18){
        under_18 = 1;
    }else if(dist_year === 18){
        if(now.getMonth()<birth.getMonth()){
            under_18 = 1;
        }else if(now.getMonth()===birth.getMonth()){
            if(now.getDay()<birth.getDay()){
                under_18 = 1;
            }
        }
    }
    return under_18 === 0
}

const validate = () => {
    if (userInfo_profile.password.value !== userInfo_profile.passwordc.value){
        message.error("Passwords doesn't match");
        reg_error = "Passwords doesn't match";
        return false
    }
    else if (!checkAge(userInfo_profile.bday.value)){
        message.error("Must older than 18");
        reg_error = "Must older than 18";
        return false
    }
    else{
        reg_error = "";
        return true
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Profile);