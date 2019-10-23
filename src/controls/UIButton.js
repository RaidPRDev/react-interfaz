import React from "react"
import PropTypes from 'prop-types';

import UIControl from "../core/UIControl"
import UILabel from "./UILabel";
import UIImage from "./UIImage";
import Randomizer from "../utils/Randomizer";

// import defaultStyles from '../styles/UIButton.module.sass';

class UIButton extends UIControl
{
    get defaultStyleProvider()
    {
        return UIControl.globalStyleProvider;
    }

    initialize(props)
    {
        super.initialize(props);

        console.log("Button.initialize", props);

        const { classes, label, icon } = props;

        this.state = {
            ...this.state,  // add base states

            label: label,
            icon: icon
        }

        this._classes = (classes && true) ? " " + classes : "";

        this._label = this.state.label && <UILabel text={this.state.label}/>
        this._icon = this.state.icon && <UIImage source={this.state.icon}/>
    }

    layout(props)
    {
        super.layout(props)

        const { gap } = props

        if (gap && true)
        {
            if (props.children && true)
            {
                let elements = React.Children.toArray(props.children)
                console.log("elements", elements);

                const insert = (arr, index, ...newItems) => [
                    // part of the array before the specified index
                    ...arr.slice(0, index),
                    // inserted items
                    ...newItems,
                    // part of the array after the specified index
                    ...arr.slice(index)
                ]
                
                const gapKey = '_' + Randomizer.getUniqueString();
                this._displayList = insert(elements, 1, <div key={gapKey} style={{width: gap}}/>)

                console.log("this._displayList ", this._displayList );
            }
            else
            {
                this._gap = gap && <div style={{width: gap}}/>
            }
        }
    }

    render()
    {
        return (
            <div className={"ui-button" + this._classes} style={this.props.style}>
                <div className={"ui-button-inner"}>
                    <button className={this._classLayout}
                        onClick={(e) => this.onClick(e)}
                        onMouseOver={(e) => this.onMouseOver(e)}
                        onMouseOut={(e) => this.onMouseOut(e)}
                    >
                        {this._icon}
                        {this._gap}
                        {this._label}
                        {this._displayList}
                    </button>
                </div>
            </div>
        )
    }

    onClick(e)
    {
        console.log("Button Clicked", e);
        const { onClick } = this.props;

        onClick && onClick(e);
    }

    onMouseOut(e)
    {
        console.log("Button Out", e);
        const { onMouseOut } = this.props;

        onMouseOut && onMouseOut(e);
    }

    onMouseOver(e)
    {
        console.log("Button Over", e);
        const { onMouseOver } = this.props;
        
        onMouseOver && onMouseOver(e);
    }
}

UIButton.propTypes = {
    classes: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    gap: PropTypes.string,
    horizontalLayout: PropTypes.string,
    verticalLayout: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func
};

export default UIButton;
