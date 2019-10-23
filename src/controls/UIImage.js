import React from "react"
import PropTypes from 'prop-types';

import UIControl from "../core/UIControl"

class UIImage extends UIControl
{
    initialize(props)
    {
        super.initialize(props);

        // console.log("UIImage.initialize.props", props)

        const { source, width, height } = props;

        this.state = {
            ...this.state,  // add base states

            source: source && source,
            width: width && width,
            height: height && height,
        }

        this._classes = (props.classes !== undefined) ? " " + props.classes : ""
    }

    render() 
    {
        return (
            <div className={"ui-image" + this._classes} >
                <img className="ui-image-source" alt="" width={this.state.width} height={this.state.height}
                    src={this.state.source}>
                </img>
            </div>
        )
    }
}

UIImage.propTypes = {
    source: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default UIImage;