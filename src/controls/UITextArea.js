import React from "react"
import UITextInput from "./UITextInput";

class UITextArea extends UITextInput
{
    initialize(props)
    {
        super.initialize(props);

        // console.log("UITextArea.initialize.props", props)

        this.defaults = {
            className: "ui-text-area",
            name: "DefaultTextArea",
            placeholder: "Enter Text",
            rows: "8",
            cols: "80",
            resize: false
        }

        // merge props into state
        this.state = {
            ...this.state,  // add base states
            ...this.defaults,
            ...props
        }

        this.customtyles = {}

        if (!this.state.resize) this.customtyles.resize = "none"
    }

    render() 
    {
        return (
            <div className={this.state.className}>
               <textarea 
                    style={this.customtyles}
                    className={this.state.className + "-inner"}
                    name={this.state.name}
                    value={this.state[this.state.name]}
                    placeholder={this.state.placeholder}
                    rows={this.state.rows}
                    cols={this.state.cols}
                    onChange={this.onInputChange }
                    onFocus={this.onInputFocus }
                />
            </div>
        )
    }

    onInputChange(event)
    {
        super.onInputChange(event)
    }

    onInputFocus(event)
    {
        super.onInputFocus(event)
    }
}

export default UITextArea