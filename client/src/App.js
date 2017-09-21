import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Boards from './components/Boards';
import NoMatch from './components/NoMatch';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/boards" component={Boards} />
    <Route component={NoMatch} />
  </Switch>
)


export default App;