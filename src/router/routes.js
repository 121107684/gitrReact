import React from 'react'
//使用了 HTML5 history API 的高阶路由组件
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from '../container/index'
import Login from '../pages/login/index'
import Editor from '../pages/editor/index'
import Music from '../pages/music/index'
import Write from '../pages/write/index'
//于支持 HTML5 history API 的浏览器
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory();

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
      <Route path="/editor" component={Editor} />
      <Route path="/music" component={Music} />
      <Route path="/write" component={Write} />
      <Redirect from='*' to='/login' />
    </div>
  </HashRouter>
);

export default routes;
