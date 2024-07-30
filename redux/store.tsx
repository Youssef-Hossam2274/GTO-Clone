import { createStore } from 'redux';
import  loginFormReducer  from './reducers/LoginReducer';

let store = createStore(loginFormReducer);

export default store;
