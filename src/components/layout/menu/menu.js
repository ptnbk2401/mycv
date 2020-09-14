import React from 'react';
// import 'antd/dist/antd.css';
import './menu.scss';
import {Menu} from 'antd';
import {
    PieChartOutlined,
} from '@ant-design/icons';

import {
    NavLink, withRouter
} from "react-router-dom";

const menu = [
    {
        key: 1,
        icon: <PieChartOutlined/>,
        name: 'Home',
        url: '/',
    },
    {
        key: 2,
        icon: <PieChartOutlined/>,
        name: 'Contact',
        url: '/contact',
    }
];


class MenuComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "1"
        };
    };

    componentDidMount(){
        menu.map((item) => {
            if (item.url === this.props.location.pathname) {
                this.setState({
                    current : item.key
                });
            }
            return item;
        });
    }

    handleClick = e => {
        this.setState({ current: e.key });
    };

    listMenus = menu.map((item) => {
            return (
                <Menu.Item key={item.key} icon={item.icon}>
                    <NavLink exact to={item.url}>{item.name}</NavLink>
                </Menu.Item>
            )
        }
    );

    render() {
        const { current } = this.state;
        return (
            <Menu theme="dark" mode="inline"
                  selectedKeys={[current.toString()]}
                  onClick={this.handleClick}>
                {this.listMenus}
            </Menu>
        );
    }
}

export default withRouter(MenuComponent);