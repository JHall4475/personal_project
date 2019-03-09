import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Workout from '../src/component/workout/Workout';
import Weight from '../src/component/weight/Weight';
import Goals from '../src/component/goals/Goals';
import Auth from '../src/component/auth/Auth';
import Equipment from './component/workout/Equipment';
import WeightWizard from './component/weight/WeightWizard';
import BasalMetRate from './component/goals/BasalMetRate';
import Exercises from './component/workout/Exercises'
import Dashboard from './component/dashboard/Dashboard';
import CaloricNeeds from './component/goals/CaloricNeeds';
import IdealWeight from './component/goals/IdealWeight';

export default (
    <Switch>
    <Route exact path="/" component={Auth}></Route>
    <Route path="/workout" component={Workout}></Route>
    <Route path="/weight" component={Weight}></Route>
    <Route path="/goals" component={Goals}></Route>
    <Route path="/equipment" component={Equipment}></Route>
    <Route path="/wizard" component={WeightWizard}></Route>
    <Route path="/basalmetrate" component={BasalMetRate}></Route>
    <Route path="/exercises" component={Exercises}></Route>
    <Route path="/dashboard" component={Dashboard}></Route>
    <Route path="/caloricNeeds" component={CaloricNeeds}></Route> 
    <Route path="/idealWeight" component={IdealWeight}></Route>  
    </Switch>
)