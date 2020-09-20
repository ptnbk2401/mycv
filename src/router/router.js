import React from 'react'
import { Switch, Route } from "react-router-dom";
import NoMatch from "../components/pages/no-match";

export default class Routers extends React.Component{
    render() {
        return (
            <Switch>
                <Route>
                    <NoMatch />
                </Route>
            </Switch>
        );
    }
}