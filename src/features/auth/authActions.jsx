import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";
import {  closeModal} from "../modals/ModalActions";

export const login = (creds) => {
    return dispatch => {
        dispatch({type: LOGIN_USER, payload: {creds}})
        dispatch(closeModal())
    }
}

export const lougout = () => {
    return {
        type: SIGN_OUT_USER
        
    }
}