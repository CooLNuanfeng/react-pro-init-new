import React from 'react'

export default class Mine extends React.Component {
  render(){
    return (
      <>
        <h1>Mine Page</h1>
        <button type="primary">click</button>
      </>
    )
  }
  componentDidMount(){
    console.log('componentDidMount mine')
  }
}