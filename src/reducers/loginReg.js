import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token') || '',
  userInfo: localStorage.getItem('userInfo') || {}
}

export const loginRegSlice = createSlice({
  name: 'loginReg',
  initialState,
  reducers: {
    getToken(state){
      return state.token
    },
    getUseInfo(state){
      return state.userInfo
    },
    setUserInfo(state,action){
      state.token = action.payload.token
      state.userInfo = action.payload.userInfo
    }
  }
})


export const doLogin = (payload) => dispatch => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      localStorage.setItem('token', payload.token)
      localStorage.setItem('userInfo', JSON.stringify({'name': payload.username}))
      const info = {
        token: payload.token,
        userInfo:{'name': payload.username}
      }
      dispatch(setUserInfo(info));
      resolve(info)
    },2000)
  })
}

export const {getUseInfo,setUserInfo} = loginRegSlice.actions

export default loginRegSlice.reducer