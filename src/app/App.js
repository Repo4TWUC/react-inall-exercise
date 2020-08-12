import React, {Component} from 'react';
import './app.less';
import {Switch, Route, BrowserRouter, NavLink} from "react-router-dom";
import Home from "../components/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <header className="header">
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" exact to="/calculator">在线计算器</NavLink>
            <NavLink activeClassName="active" exact to="/timer">在线计时器</NavLink>
          </header>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/calculator' component={Home}/>
            <Route exact path='/timer' component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
