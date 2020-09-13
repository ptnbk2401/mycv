import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";

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
            </Switch>
        );
    }
}