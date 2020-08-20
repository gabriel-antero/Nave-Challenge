import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import AddNaver from '../pages/AddNaver';
import EditNaver from '../pages/EditNaver';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add" component={AddNaver} />
      <Route path="/edit" component={EditNaver} />
    </Switch>
  )
};

export default Routes;
