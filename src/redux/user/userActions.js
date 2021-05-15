import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {

        const body = {
            records: [
                { name: "Harper", username: "Mutt" },
                { name: "Penny", username: "Mutt111", }
            ]
        };

        axios({
                method: 'post',
                url: 'http://jsonplaceholder.typicode.com/users',
                data: body,
            })
            .then((response) => {
                console.log("POST SUCCESS  " + response);
            })
            .catch((error) => {
                console.log(error);
            });

        dispatch(fetchUserRequest)
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const message = error.message
                dispatch(fetchUserFailure(message))
            })
    }
}