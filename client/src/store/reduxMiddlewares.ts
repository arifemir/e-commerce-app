import axios from "axios";
import { Middleware } from "redux";
import { setAuthHeader } from "./helper/setAuthHeader";
import { USER_LOGIN_REGISTER_SUCCESS, USER_UPDATE } from "./user-auth/userAuthTypes";

const saveAuthToken: Middleware = store => next => action => {
  if(action.type === USER_UPDATE || action.type === USER_LOGIN_REGISTER_SUCCESS) {
    setAuthHeader(action.payload.token);
  }

  return next(action);
}

export {
  saveAuthToken
}