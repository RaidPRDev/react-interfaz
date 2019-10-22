import React from "react"
import UIControl from "../core/UIControl";

class UIDropdown extends UIControl
{
    initialize(props)
    {
        this.state = {
            ...this.state,  // add base states

            name: (props.name) ? props.name : "default-checkbox",
            value: (props.value) ? props.value : "default-value",
            selected: (props.selected) ? props.selected : false,
            items: (props.items) ? props.items : ["item1", "item2"]
        }

        this.state[this.state.name] = props.selected;

        this.onChange = this.onChange.bind(this)
    }

    onChange(event)
    {
        const { name, value } = event.target

        console.log("ONCHANGE", name, value)

        this.setState({
            selected: value
        })

        if (this.props.onChange !== undefined) 
        {
            this.props.onChange(
            {
                event: event,
                name: name, 
                selected: value
            });
        }
    }

    render()
    {
        let classes = (this.props.classes !== undefined) ? this.props.classes : ""
        return (
            <div className={"ui-dropdown " + classes}>
                <select 
                    className="ui-dropdown-select"
                    name={this.state[this.state.name]}
                    value={this.state.selected}
                    onChange={this.onChange}
                >
                    <option className="ui-dropdown-item" value="green">Green</option>
                    <option className="ui-dropdown-item" value="red">Red</option>
                    <option className="ui-dropdown-item" value="blue">Blue</option>
                </select>
            </div>
        )
    }
}

export default UIDropdown