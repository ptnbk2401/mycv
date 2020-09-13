import React from 'react'
import logo from '../../logo.svg';
import './logo.scss'
import {NavLink} from 'react-router-dom'

class LogoComponent extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt=""/>
                <NavLink to={`/`}>
                    <span className="name">React</span>
                </NavLink>
            </div>
        );
    }
}

export default LogoComponent