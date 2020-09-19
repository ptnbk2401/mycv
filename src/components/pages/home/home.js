import React from 'react';
import './home.scss';
import {useDispatch, useSelector} from "react-redux";
import HomeList from "../../../containers/home";
import {addItem, removeItem} from "./../../../reducers/home";
import { Button } from "antd";

const item = {
    name: 'C'
};

function Home() {
    const listData = useSelector(state => state.home.list);
    const dispatch = useDispatch();


    const handelClickAddItem = () => {
        const reducerHome = addItem(item);
        dispatch(reducerHome);
    };

    const handelClickRemoveItem = () => {
        const reducerHome = removeItem();
        dispatch(reducerHome);
    };

    return (
        <div className="home">
            <h1>Home page</h1>
            <Button onClick={() => handelClickAddItem()}>Add Item</Button>
            <Button onClick={() => handelClickRemoveItem()}>Remove Item</Button>
            <HomeList listData={listData}/>
        </div>
    );
}

export default Home;