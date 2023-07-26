import { toast } from "react-toastify";
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./Actiontype"
import axios from 'axios';

export const makeRequest = ()=>{
    return{
        type: MAKE_REQUEST
    }
}

export const failRequest = (err)=>{
    return{
        type: FAIL_REQUEST,
        payload: err
    }
}

export const getUserList = (data)=>{
    return{
        type: GET_USER_LIST,
        payload:data
    }
}

export const deleteuser = ()=>{
    return{
        type: DELETE_USER
    }
}

export const adduser = ()=>{
    return{
        type: ADD_USER
    }
}

export const updateuser = ()=>{
    return{
        type: UPDATE_USER
    }
}

export const getUserObj = (data)=>{
    return{
        type: GET_USER_OBJ,
        payload:data
    }
}

export const fetchUserList=()=>{
    return(dispatch)=>{
        dispatch(makeRequest())
        axios.get('http://localhost:8000/user').then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}


export const RemoveUser = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .delete(`http://localhost:8000/user/${code}`) // Add a forward slash between the base URL and code
            .then((res) => {
                dispatch(deleteuser());
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
}

export const FunAddUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .post(`http://localhost:8000/user/`,data) // Add a forward slash between the base URL and code
            .then((res) => {
                dispatch(adduser());
                toast.success('User Added Successfully...!')
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
}

export const FunUpdateUser = (data,code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .put(`http://localhost:8000/user/`+code,data) // Add a forward slash between the base URL and code
            .then((res) => {
                dispatch(updateuser());
                toast.success('User Updated Successfully...!')
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
}

export const FetchUserobj = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios
            .get(`http://localhost:8000/user/`+code) // Add a forward slash between the base URL and code
            .then((res) => {
                const userlist=res.data
                dispatch(getUserObj(userlist));
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            });
    };
}