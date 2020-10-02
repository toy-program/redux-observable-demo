import { combineReducers } from "redux";
import auth from "./auth"; 
import errorMessage from "./errorMessage";
import loading from "./loading";

export default combineReducers({
    auth,
    errorMessage,
    loading
})