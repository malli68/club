<<<<<<< HEAD
import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Clubs from '../clubs/Clubs';
import ClubUsers from '../../components/clubUsers/ClubUsers';
import Dashboard from '../dashboard/Dashboard'
// import Error from '../login/Error';
import Login from '../login/Login'
import ProtectedRoute from '../routing/ProtectedRoute'
import updateClub from '../clubs/updateClub';
import UserLogin from '../login/UserLogin';
import  ClubPlayers  from '../clubs/ClubPlayers';
import Table from '../Tables/Table';
export default class AppRouter extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path='/superadmin' component={Login}></Route>
                    <Route exact path='/' component={UserLogin}></Route>

                    <ProtectedRoute exact path='/dashboard' component={Dashboard}></ProtectedRoute>                   
                    <ProtectedRoute exact path='/clubusers' component={ClubUsers}></ProtectedRoute>
                    <ProtectedRoute exact path='/clubs' component={Clubs}></ProtectedRoute>
                    <ProtectedRoute exact path='/clubPlayers' component={ClubPlayers}></ProtectedRoute>
                    <ProtectedRoute exact  path='/updateclub' component={updateClub}></ProtectedRoute>
                    <ProtectedRoute exact  path='/tables' component={Table}></ProtectedRoute>

                    
                    <Route path="/*"> <Redirect to="/" /></Route>
                    </Switch>
                </Router>
                
            </div >
        )
    }
=======
import React from 'react'
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Clubs from '../clubs/Clubs';
import ClubUsers from '../../components/clubUsers/ClubUsers';
import Dashboard from '../dashboard/Dashboard'
// import Error from '../login/Error';
import Login from '../login/Login'
import ProtectedRoute from '../routing/ProtectedRoute'
export default class AppRouter extends React.Component {


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                    <Route exact path='/' component={Login}></Route>
                    <ProtectedRoute exact path='/dashboard' component={Dashboard}></ProtectedRoute>                   
                    <ProtectedRoute exact path='/clubusers' component={ClubUsers}></ProtectedRoute>
                    <ProtectedRoute exact path='/clubs' component={Clubs}></ProtectedRoute>
                    <Route path="/*"> <Redirect to="/" /></Route>
                    </Switch>
                </Router>
                
            </div >
        )
    }
>>>>>>> 03ffa5a12daf10079fd3ff5076f21db4c34fe44e
}