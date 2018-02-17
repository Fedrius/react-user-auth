import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class SignUp extends Component {
    //deconstructed props...in the parameter
    renderInput({input, type, placeholder, meta: {touched,error}}){
        return (
            <div className='input-field'>
                <input {...input} type={type ? type : 'text'} placeholder={placeholder}/>
                <p className='red-text'>{touched && error}</p>
            </div>
        )
    }

    handleSignUp(values){
        console.log('sign up formmmmmm', values)
    }

    render(){

        const {handleSubmit} = this.props;

        return(
            <div className='center-align'>
                <h1>Sign Up</h1>
                <div className='row'>
                    <div className='col s6 offset-s3'>
                        <div className='card green lighten-5'>
                            <div className='card-content'>
                                <form onSubmit={handleSubmit(this.handleSignUp)}>
                                    <Field component={this.renderInput} name='email' placeholder='enter your email' type='email'/>
                                    <Field component={this.renderInput} name='password' placeholder='choose a password' type='password'/>
                                    <Field component={this.renderInput} name='confirmPassword' placeholder='confirm password' type='password'/>
                                    <button className='btn blue-grey darken-1'>Sign UUp</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values){
    const error = {};

    if(!values.email){
        error.email = 'PLEASE ENTER A DAMN EMAIL'
    }

    if(!values.password){
        error.password = 'ENTER A DAMN PASSWORD'
    }

    if(values.password !== values.confirmPassword){
        error.confirmPassword = 'PASSWORDS DONNT MATCH DAMMIT'
    }

    return error;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default SignUp;
