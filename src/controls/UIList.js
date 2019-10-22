import React from "react"
import UIItemRenderer from "./renderers/UIItemRenderer";
import UIControl from "../core/UIControl";

class UIList extends UIControl
{
    /*
        Array functions: filter, map, sort, reduce, every, some, find, findIndex
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/__name
    */
    initialize(props)
    {
        super.initialize(props);

        console.log("UIList.initialize.props", props)

        this.state = {
            ...this.state,  // add base states

            selectedIndex: 0
        }

        this._classes = (props.classes !== undefined) ? " " + props.classes : ""

        //this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick = (e) =>
    {
        console.log("onItemClick", e, this.props.index);

        // const index = this.props.index;

        // this.setState({selectedIndex:this.props.index})

        if (this.props.onClick !== undefined) this.props.onClick(e);
    }

    render()
    {
        // console.log("UIList", this.state.items);
        let index = 0;
        const data = this.props.items.map((item) => 
        {
            item.index = index;
            index++;
            return (
                <UIItemRenderer key={item.index} {...item} onClick={this.onItemClick} />
            )
        });

        return (
            <div className={"ui-list" + this._classes}>
                {data} 
            </div>
        )
    }
}

export default UIList;

