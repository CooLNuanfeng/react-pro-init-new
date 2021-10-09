import React from 'react'
import { connect } from 'react-redux';
import { doLogin } from '../../reducers/loginReg'


const mapDispatchToProps = {doLogin}

class Login extends React.Component {
  render(){
    return (
      <>
        <h1>Login Page</h1>
        <button type="primary" onClick={()=>this.login()}>login</button>
      </>
    )
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  login(){
    console.log('login in')
    this.props.doLogin({
      username:'leo',
      token: 'token'
    }).then((res)=>{
      this.props.history.push('/mine')
    })
  }
}



export default connect(null, mapDispatchToProps)(Login);