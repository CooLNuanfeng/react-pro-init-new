import { combineReducers, configureStore } from '@reduxjs/toolkit';

import todos from '../reducers/todos' 
import users from '../reducers/loginReg'


const rootReducres = combineReducers({
  todos,
  users
});


const store = configureStore({
  reducer: rootReducres
})

export default store;