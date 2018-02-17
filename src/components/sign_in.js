import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {renderInput} from "../helpers";

class SignIn extends Component {

    handleSignIn(values){
        console.log('sign up formmm', values)
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
                                <form onSubmit={handleSubmit(this.handleSignIn)}>
                                    <Field component={renderInput} name='email' placeholder='enter your email' type='email'/>
                                    <Field component={renderInput} name='password' placeholder='Enter a Password' type='password'/>
                                    <button className='btn blue-grey darken-1'>Sign In</button>
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

export default SignIn;
