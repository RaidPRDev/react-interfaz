import React, {Component} from "react"
import UILayout from "./UILayout"

class UIControl extends Component
{
    constructor(props)
    {
        super(props)

        this.defaults = { 
            isEnabled: true
        }

        // merge props into state
        this.state = { ...this.state, ...this.defaults }

        // internal layout
        this._layout = undefined;
        this._classLayout = "";
        this._styles = "";
        this._horizontalLayout = "";
        this._verticalLayout = "";
        this._displayList = undefined;

        this.initialize(props);
        this.layout(props);
    }

    /**
     * @param {{ (arg0: any): void; (arg0: any): void; }} value
     */
    set layout(value)
    {
        this._layout = value;
    }

    initialize(props)
    {
        
    }

    layout(props)
    {
        const { layout } = props

        this._layout = (!layout && true ) ? new UILayout() : new layout();

        this._styles = this._layout.getLayoutStyles(props);
        
        this._classLayout = this._layout.getLayoutClasses(props);

        this._displayList = this._layout.getLayoutDisplay(props);
    }

    render()
    {
        return (
            <div class="ui-control"></div>
        )
    }

    getType(o) { return o && o.constructor && o.constructor.name }
}

export default UIControl;