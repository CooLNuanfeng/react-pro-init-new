import React from 'react'
import {Link} from 'react-router-dom'
import './tabbar.css'


export default class Tabbar extends React.Component {
  render(){
    return (
      <div className="tabbar">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/cart">Shop</Link></div>
        <div><Link to="/mine">Mine</Link></div>
      </div>
    )
  }
}