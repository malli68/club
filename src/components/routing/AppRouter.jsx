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
}