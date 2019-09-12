import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Workout from '../src/component/workout/Workout';
import Weight from '../src/component/weight/Weight';
import Goals from '../src/component/goals/Goals';
import Auth from '../src/component/auth/Auth';
import WeightWizard from './component/weight/WeightWizard';
import Dashboard from './component/dashboard/Dashboard';
import Register from './register/Register';
import Profile from './component/profile/Profile';

export default (
    <Switch>
    <Route exact path="/" component={Auth}></Route>
    <Route path="/workout" component={Workout}></Route>
    <Route path="/weight" component={Weight}></Route>
    <Route path="/goals" component={Goals}></Route>
    <Route path="/wizard" component={WeightWizard}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/register" component={Register}></Route>
    <Route path="/profile" component={Profile}></Route>
    </Switch>
)