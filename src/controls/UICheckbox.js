import React from "react"
import UIControl from "../core/UIControl";

class UICheckbox extends UIControl
{
    initialize(props)
    {
        super.initialize(props);

        //console.log("UICheckbox.initialize.props", props)

        this.state = {
            ...this.state,  // add base states

            // type: (props.type) ? props.type : "checkbox",
            name: (props.name) ? props.name : "default-checkbox",
            label: (props.label) ? props.label : "default-label",
            value: (props.value) ? props.value : "default-value",
            selected: (props.selected) ? props.selected : false
        }

        this.state[this.state.name] = props.selected;

        this._classes = (props.classes !== undefined) ? props.classes : ""

        this.onChange = this.onChange.bind(this)
    }

    /**
     * @param {boolean} value
     */
    set isSelected(value) 
    {
        this.setState({
            [this.state.name]: value
        })
    }
          
    onChange(event)
    {
        const { type, name, checked, value } = event.target

        if (type === "checkbox")
        {
            this.setState({
                [name]: checked
            })
        }

        if (this.props.onChange !== undefined) 
        {
            this.props.onChange(
            {
                event: event,
                type: type, 
                name: name, 
                checked: checked, 
                value: value
            });
        }
    }

    render() 
    {
        let classes = (this.props.classes !== undefined) ? this.props.classes : ""
        if (this.props.type === "checkbox")
        {
            return (
                <div className={"ui-checkbox " + classes}>
                    <label className="ui-checkbox-label">
                        <input 
                            type={this.props.type}
                            className="ui-checkbox-input"
                            name={this.state.name}
                            checked={this.state[this.state.name]}
                            onChange={this.onChange}
                        />
                        {this.state.label}
                    </label>
                </div>
            )
        }
        else if (this.props.type === "radio") 
        {
            return (
                <div className={"ui-radio " + classes}>
                    <label className="ui-radio-label">
                        <input 
                            type={this.props.type}
                            className="ui-radio-input"
                            name={this.state.name}
                            value={this.state.value}
                            checked={this.props.selected === this.state.value}
                            onChange={this.onChange}
                        />
                        {this.state.label}
                    </label>
                </div>
            )
        }

        return ( <div></div> )
    }
}

export default UICheckbox;