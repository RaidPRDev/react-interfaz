import React from "react"
import UIScreen from "../../controls/UIScreen";
import UITextInput from "../../controls/UITextInput";
import UITextArea from "../../controls/UITextArea";
import UILabel from "../../controls/UILabel";
import UICheckbox from "../../controls/UICheckbox";
import UIDropdown from "../../controls/UIDropdown";

class FormScreen extends UIScreen
{
    initialize(props)
    {
        super.initialize(props);

        console.log("props", props);
        
        for (let key in props.children)
        {
            let child = props.children[key];
            console.log("child", child);
            console.log("child.type", child.type);
            console.log("child.props", child.props);


        }

        this.state = {
            ...this.state,
            isLoading: true,
            inputs: [
                { name: "firstName", placeholder: "Please enter your name" },
                { name: "lastName", placeholder: "Please enter your name" }
            ],
            genderName: "Male",
            optionSelected: "Male",
            placeholder: "Enter Text",
            onChange: null
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(event)
    {
        const { type, value, checked, name } = event

        // update radio buttons if needed
        if (type === "radio" || type === "checkbox")
        {
            console.log("onInputChange", name, checked, value)

            if (type === "radio" && this.state.optionSelected !== value)
            {
                this.setState({
                    optionSelected: value
                })
            }
        }
    }

    onSubmit(event)
    {
        console.log("onSubmit", event);
        event.preventDefault();
        
    }

    render()
    {
        let index = 0;
        const data = this.state.inputs.map((itemInput) => 
        {
            itemInput.index = index;
            index++;
            return (
                <UITextInput 
                    key={itemInput.index} 
                    { ...itemInput } 
                    onChange={this.onInputChange}
                />
            )
        });

        /*
<UILabel 
                    text="Text Input Field Examples"
                />
          
        */
        return (
            <form onSubmit={this.onSubmit}>
                
                {this.props.children}

                <UICheckbox 
                    type="checkbox"
                    name="isFriendly"
                    label="isFriendly"
                    selected={true}
                    onChange={this.onInputChange}
                />

                <UICheckbox 
                    type="radio"
                    name="gender"
                    label="Male"
                    value="Male"
                    selected={this.state.optionSelected}
                    onChange={this.onInputChange}
                />

                <UICheckbox 
                    type="radio"
                    name="gender"
                    label="Female"
                    value="Female"
                    selected={this.state.optionSelected}
                    onChange={this.onInputChange}
                />
                
                { data }

                <UITextInput 
                    name="MyInputArea"
                    classes="my-text-field"
                    onChange={this.onInputChange}
                />

                <UITextArea 
                    name="MyTextArea"
                    placeholder="This is my text area"
                    onChange={this.onInputChange}
                />

                <UIDropdown
                    name="MySelectBox"
                />

                <button>Submit</button>

            </form>
        )
    }
}

export default FormScreen