import React, {Component} from 'react'

import Header from '../Header'
import Tabbar from '../Tabbar'
 
import store from '../../store'

import './layout.css'


const Layout = (WrappedComponent, pageInfo) => {
  return class extends Component {
    render() {
      if(pageInfo.needLogin && !store.getState().users.token){
        return null
      }else{
        return (
          <div className="page-warp">
            {pageInfo.showHeader ? <Header {...this.props} info={pageInfo}/> : null}
            <div className="page-body" style={{top: pageInfo.showHeader ? '.9rem' : 0, bottom: pageInfo.showTabbar ? '.9rem' : 0}}>
              <WrappedComponent {...this.props} {...pageInfo.meta}/>
            </div>
            {pageInfo.showTabbar ? <Tabbar />: null}
          </div>
        )   
      }
    }
    componentDidMount(){
      if(pageInfo.needLogin && !store.getState().users.token){
        this.props.history.push('/login')
      }
    }
  }
}

export default Layout