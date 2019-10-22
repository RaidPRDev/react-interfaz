import React from "react"

import UIControl from "../core/UIControl"

class UILabel extends UIControl
{
    initialize(props)
    {
        super.initialize(props);

        this.state = {
            ...this.state,  // add base states

            text: (props.text) ? props.text : "Default Label"
        }

        this._classes = (props.classes !== undefined) ? " " + props.classes : ""
    }

    layout(props)
    {
        super.layout(props)
    }

    render() 
    {
        console.log("UILabel", this._classLayout)

        return (
            <div className={"ui-label" + this._classes + this._classLayout}>
                <div className={"ui-label-inner"} style={this._styles}>{this.state.text}</div>
            </div>
        )
    }
}

export default UILabel;