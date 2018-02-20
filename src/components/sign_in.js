import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from "../helpers";
import {connect} from 'react-redux';
import {signIn} from "../actions";

class SignIn extends Component {

    handleSignIn(values){
        console.log('sign in forrrmmm', values);

        this.props.signIn(values);
    }

    render(){

        const {handleSubmit} = this.props;

        return(
            <div className='center-align'>
                <h1>Sign In</h1>
                <div className='row'>
                    <div className='col s6 offset-s3'>
                        <div className='card green lighten-5'>
                            <div className='card-content'>
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field component={renderInput} name='email' placeholder='enter your email' type='email'/>
                                    <Field component={renderInput} name='password' placeholder='Enter a Password' type='password'/>
                                    <button className='btn blue-grey darken-1'>Sign In</button>
                                    <p className='red-text center-align'>{this.props.authError}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


SignIn = reduxForm({
    form: 'sign-in-form'
})(SignIn);


function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, {signIn})(SignIn);
