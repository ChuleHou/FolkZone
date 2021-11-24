import React, {Component} from 'react';
import Login_Page from "./login";
import Register_Page from "./register";
import {log_in, set_error_reg, set_dummy} from "../../actions";
import {connect} from "react-redux";


class Landing extends Component {
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(res =>
            {/* TODO: pass players to request players action */
                this.props.set_dummy(res)
            }
        );
    }

    render() {
        return (
            <div>
                <Login_Page />
                <Register_Page />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_dummy: (res) => dispatch(set_dummy(res))
    }
};
export default connect(
    mapStateToProps,mapDispatchToProps
)(Landing);