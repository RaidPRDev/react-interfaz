import React from "react"

import UIScreen from "../../controls/UIScreen";
import UIList from "../../controls/UIList";

import dataItems from "../data/appData"

class MainScreen extends UIScreen
{
    initialize(props)
    {
        super.initialize(props);

        this.state = {
            ...this.state,
            isLoading: true
        }

        
    }

    componentDidMount()
    {
        /*
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                console.log("SWApi:", data)
                this.setState({
                    isLoading: false
                });
            })
        */

        this.setState({
            isLoading: false
        });
    }

    onListItemClick = (e) => 
    {
        console.log("onListItemClick", e.index);
    }

    render() 
    {
        if (this.state.isLoading) 
        {
            return (
                <div>Loading Data....</div>
            )
        }

        const data = dataItems.map((item) => 
        {
            let itemData = {
                label: item.name,
                iconSource: item.thumb,
                accessoryLabel: item.description,
                gap: "10px",
                labelAlignment: "left",
                iconAlignment: "left",
                accessoryAlignment: "left"
            }

            return (itemData)
        });

        return (
            <div>
                <UIList 
                    items={data} 
                    onClick={this.onListItemClick}
                />
            </div>
        )
    }
}

export default MainScreen