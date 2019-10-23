import React from "react"
import UIControl from "../core/UIControl";

class UITextInput extends UIControl
{
    initialize(props)
    {
        super.initialize(props);

        //console.log("UITextInput.initialize.props", props)

        this.state = {
            ...this.state,  // add base states

            name: (props.name) ? props.name : "default-input",
            placeholder: (props.placeholder) ? props.placeholder : "Enter Text"
        }
        
        // create key for input name
        this.state[this.state.name] = "";

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
    }

    render() 
    {
        let classes = (this.props.classes !== undefined) ? this.props.classes : ""
        return (
            <div className={"ui-text-input " + classes}>
               <input 
                    type="text"
                    className="ui-text-input-inner"
                    name={this.state.name}
                    value={this.state[this.state.name]}
                    placeholder={this.state.placeholder}
                    onChange={this.onInputChange }
                    onFocus={this.onInputFocus }
                    onBlur={this.onInputBlur }
                />
            </div>
        )
    }

    onInputChange(event)
    {
        // console.log("onInputChange",  event.target);
        const {name, value} = event.target; // grab the values from target
        this.setState({
            [name]: value
        })  

        if (this.props.onChange !== undefined) this.props.onChange({
            event: event,
            name: name,
            value: value
        });
    }

    onInputFocus(event)
    {
        // console.log("onInputFocus",  event.target.value);
        const {name, value} = event.target; // grab the values from target

        if (this.props.onFocus !== undefined) this.props.onFocus({
            event: event,
            name: name,
            value: value
        });
    }

    onInputBlur(event)
    {
        // console.log("onInputBlur",  event.target.value);
        const {name, value} = event.target; // grab the values from target

        if (this.props.onBlur !== undefined) this.props.onBlur({
            event: event,
            name: name,
            value: value
        });
    }

    componentWillUnmount()
    {

    }
}

export default UITextInput