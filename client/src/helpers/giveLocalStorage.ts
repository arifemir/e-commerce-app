import axios from "axios";
import { IUser } from "../@types";

const getLocalStorageForUser = (storeName: string) => {
  try {
    const serializedState = localStorage.getItem(storeName);
    if (serializedState === null) {
      return null;
    }
    const user: IUser = JSON.parse(serializedState);
    axios.defaults.headers.Authorization = 'Bearer ' + user.token;
    return user;
  } catch (err) {
    return null;
  }
}

const getLocalStorage = (storeName: string) => {
  try {
    const serializedState = localStorage.getItem(storeName);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
}

export {
  getLocalStorageForUser,
  getLocalStorage,
}