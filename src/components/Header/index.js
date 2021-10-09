import React from 'react'

import './header.css'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this)
  }
  render(){
    return (
      <div className="header">
        <div className="header-fl">{this.props.info.hiddenBack ? null : <button onClick={this.back}>back</button>}</div>
        <div className="header-mid">{this.props.info.title}</div>
        <div className="header-fr"></div>
      </div>
    )
  }
  back(){
    this.props.history.goBack()
  }
}