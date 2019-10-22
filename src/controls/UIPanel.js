import React from "react"
import UIControl from "../core/UIControl"

class UIPanel extends UIControl
{
    initialize(props)
    {
        super.initialize(props);

        this.state = {
            ...this.state,  // add base states
        }

        this._classes = (props.classes !== undefined) ? " " + props.classes : ""
    }

    layout(props)
    {
        super.layout(props)
    }

    render()
    {
        return (
            <div className={"ui-panel" + this._classes} >
                <div className={"ui-panel-inner" + this._classLayout} style={this._styles} >
                    {this._displayList}
                </div>
            </div>
        )
    }
}

export default UIPanel;