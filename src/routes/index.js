import React from 'react';

import { Switch } from 'react-router-dom';
import { AuthProvider } from '../hooks/auth';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import AddNaver from '../pages/AddNaver';
import EditNaver from '../pages/EditNaver';

const Routes = () => (
  <AuthProvider>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/add" component={AddNaver} isPrivate />
      <Route path="/edit" component={EditNaver} isPrivate />
    </Switch>
  </AuthProvider>
);

export default Routes;
