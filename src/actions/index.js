import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){
    return dispatch => {
        axios.post(`${BASE_URL}/signup`, cred).then(resp => {
            console.log('signup', resp)
        }).catch(err =>{
            console.log('signup', err.message)
        })
    }
}

export function signIn(cred){
    return async dispatch => {

        try {
            const resp = await axios.post(`${BASE_URL}/signin`,cred);

            console.log('sign in resp', resp)
        } catch (err){
            console.log('signinerror',err.message)
        }

    }
}
