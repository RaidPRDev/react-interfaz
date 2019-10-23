import React from "react"
import { connect } from 'react-redux';

import '../index.css';

import DefaultTheme from "./theme/DefaultTheme";

import { fetchUser } from "../data/providers/redux/actions/UserActions"
import { fetchList } from "../data/providers/redux/actions/ListActions"
import UIList from "../controls/UIList";

class AppRedux extends React.Component 
{
    constructor(props) 
    {
        super(props)

        this.state = {
            isLoggedIn: true
        }

        // set theme
        this._theme = new DefaultTheme();
    }

    componentDidMount()
    {
        console.log("App.componentDidMount")

        this.props.dispatch(fetchUser())
        this.props.dispatch(fetchList())
    }

    onSignInControl(e)
    {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    onClick(e)
    {
        console.log("App-> Button Clicked", e);
    }

    render() 
    {
        console.log("App.render", this.props)

        const appName = "AppTest"
        const appVersion = "v1.0.0"
    
        const { user, list } = this.props

        const data = list.map((item) => 
        {
            console.log("item", item)
            let itemData = {
                label: item.name,
                accessoryLabel: item.email,
                gap: "10px",
                labelAlignment: "left",
                iconAlignment: "left",
                accessoryAlignment: "left"
            }

            return (itemData)
        });

        return (
            <div className="app">
                <div>{user.username}</div>
                
                <UIList 
                    items={data} 
                    onClick={this.onClick}
                />
            </div>
        )
    }
}

export default connect((store) =>
{
    console.log("store", store)
    return {
        user: store.profile.user,
        userFetched: store.profile.fetched,
        list: store.list.items
    }
}
)(AppRedux)