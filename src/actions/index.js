import * as ActionTypes from "../constants/ActionTypes";

export function loadingStart() {
    return {
        type: ActionTypes.LOADING_START
    }
}

export function loadingEnd() {
    return {
        type: ActionTypes.LOADING_END
    }
}

export function setAuth(auth) {
    console.log(auth);
    return {
        type: ActionTypes.SET_AUTH,
        auth
    }
}

export function resetAuth() {
    return {
        type: ActionTypes.RESET_AUTH
    }
}

export function showErrorMessage(message) {
    return {
        type: ActionTypes.SHOW_ERROR_MESSAGE,
        message
    }
}

export function hideErrorMessage() {
    return {
        type: ActionTypes.HIDE_ERROR_MESSAGE
    }
}

export function getAuth(username, password) {
    return {type: ActionTypes.GET_AUTH, username, password}
}
