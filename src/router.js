import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import main pages that are not store or blog
import LandingPage from "./components/Home/LandingPage";


//start router
export default (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
)