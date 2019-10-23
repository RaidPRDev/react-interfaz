import React from "react"

import UIImage from "../UIImage"
import UILabel from "../UILabel"
import UIControl from "../../core/UIControl"

/*
    UIItemRenderer.propTypes = 
    {
        className: PropTypes.string,
        label: PropTypes.string,
        iconLabel: PropTypes.string,
        iconSource: PropTypes.any,
        accessoryLabel: PropTypes.string,
        accessorySource: PropTypes.any
    }
    return (
    <UIItemRenderer key={item.index} data={{
        className: (item.className) ? item.className : "",
        label: (item.label) ? item.label : undefined,
        iconLabel: (item.iconLabel) ? item.iconLabel : undefined,
        iconSource: (item.iconSource) ? item.iconSource : undefined,
        accessoryLabel: (item.accessoryLabel) ? item.accessoryLabel : undefined,
        accessorySource: (item.accessorySource) ? item.accessorySource : undefined,
        gap: (item.gap) ? item.gap : "0",
        labelAlignment: (item.labelAlignment) ? item.labelAlignment : "left",
        iconAlignment: (item.iconAlignment) ? item.iconAlignment : "left",
        accessoryAlignment: (item.accessoryAlignment) ? item.accessoryAlignment : "left",
        onClick: this.onItemClick
    }}/>
)*/

class UIItemRenderer extends UIControl
{
    initialize(props)
    {
        super.initialize(props);

        // console.log("UIItemRenderer.initialize.props", props)

        this.state = {
            ...this.state,  // add base states
        }

        this._classes = (props.classes !== undefined) ? " " + props.classes : ""
        this._label = null;
        this._icon = null;
        this._accessory = null;

        this.onClick = this.onClick.bind(this);
    }

    onClick(event)
    {
        console.log("ItemRenderer.onClick");

        if (this.props.onClick !== undefined) this.props.onClick({
            index: this.props.index,
            event: event
        });

    }

    componentDidMount()
    {
        // console.log("item.componentDidMount()",this.props);
    }

    render()
    {
        // console.log("item.render()",this.props);

        // check if we have a text label 
        if (this.props.label !== undefined)
        {
            this._label = <UILabel text={this.props.label} />
        }

        if (this.props.iconLabel !== undefined)
        {
            this._icon = <UILabel text={this.props.iconLabel} />
        }

        if (this.props.iconSource !== undefined)
        {
            this._icon = <UIImage source={this.props.iconSource} />
        }
        
        if (this.props.accessoryLabel !== undefined)
        {
            this._accessory = <UILabel text={this.props.accessoryLabel} />
        }

        if (this.props.accessorySource !== undefined)
        {
            this._accessory = <UIImage source={this.props.accessorySource} />
        }

        return ( 
            <div 
                className={"ui-item-renderer" + this._classes}
                onClick={this.onClick}
            > 
                <div className="ui-item-renderer-inner"> 
                    { this._icon !== null && this._icon }
                    { this._label !== null && this._label }
                    { this._accessory !== null && this._accessory }
                </div>
            </div> 
        )
    }
}

export default UIItemRenderer;