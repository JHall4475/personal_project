import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Workout from '../src/component/workout/Workout';
import Weight from '../src/component/weight/Weight';
import Goals from '../src/component/goals/Goals';
import Auth from '../src/component/auth/Auth';

export default (
    <Switch>
    <Route exact path='/' component={Auth}></Route>
    <Route path="/workout" component={Workout}></Route>
    <Route path="/weight" component={Weight}></Route>
    <Route path="/goals" component={Goals}></Route>
    

        
    </Switch>
)