import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from '../components/Layout'
import Loading from '../components/Loading'

const Home = Layout(React.lazy(()=> import('../views/home')), {
  title: '首页',
  showHeader: false,
  showTabbar: true,
})

const Detail = Layout(React.lazy(()=> import('../views/detail')), {
  title: '详情',
  showHeader: true,
  showTabbar: false,
})

const Mine = Layout(React.lazy(()=> import('../views/mine')), {
  title: '我的',
  showHeader: true,
  showTabbar: true,
  needLogin: true,
  hiddenBack: true,
})

const Cart = Layout(React.lazy(()=> import('../views/cart')), {
  title: '购物车',
  showHeader: true,
  showTabbar: true,
  needLogin: true,
  hiddenBack: true,
  meta: {
    other: 'aa'
  }
})


const Login = Layout(React.lazy(()=> import('../views/login')), {
  title: '登录',
  showHeader: true,
  showTabbar: false
})

const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
          <Suspense fallback={<Loading/>}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail/:id" component={Detail}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/mine" component={Mine}/>
            <Route exact path="/login" component={Login}/>
          </Suspense>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;