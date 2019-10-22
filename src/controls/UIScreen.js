import React from "react"
import UIControl from "../core/UIControl"

class UIScreen extends UIControl
{
    initialize()
    {
        super.initialize();

        this.state = {
            ...this.state,
        }
    }

    render()
    {
        return (
            <div className="ui-screen"></div>
        )
    }
}

export default UIScreen;