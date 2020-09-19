import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/home";
import Contact from "../components/pages/contact";
import NoMatch from "../components/pages/no-match";

export default class Routers extends React.Component{
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        );
    }
}