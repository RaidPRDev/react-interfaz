import React from "react"

import UILayout from "../core/UILayout";
import FlexAlign from "../layout/FlexAlign";
import Randomizer from "../utils/Randomizer";

class UIFlexLayout extends UILayout
{
    _layoutClassName = "ui-flex"

    constructor()
    {
        super()
    }

    getLayoutStyles(props)
    {
        const { paddingLeft, paddingRight, paddingTop, paddingBototm } = props

        return {
            paddingLeft: (paddingLeft && paddingLeft) 
        }
    }

    getLayoutClasses(props)
    {
        const { alignment, horizontalAlignment, verticalAlignment } = props
        
        let classLayout = []

        classLayout.push(this._layoutClassName);

        if (alignment && true)
        {
            switch (alignment)
            {
                case FlexAlign.CENTER:
                    classLayout.push(FlexAlign.CENTER)
                    break;

                case FlexAlign.SPACE_BETWEEN:
                    classLayout.push(FlexAlign.SPACE_BETWEEN)
                    break;

            }
        }

        if (horizontalAlignment && true) 
        {
            switch (horizontalAlignment)
            {
                case FlexAlign.HORIZONTAL_CENTER:
                    classLayout.push(FlexAlign.HORIZONTAL_CENTER)     // ui-flex-justify-center
                    break;

            }
        }

        if (verticalAlignment && true) 
        {
            switch (verticalAlignment)
            {
                case FlexAlign.VERTICAL_MIDDLE:
                    classLayout.push(FlexAlign.VERTICAL_MIDDLE)       // ui-flex-align-center
                    break;

            }
        }

        if (classLayout.length > 0) classLayout[0] = " " + classLayout[0];

        return classLayout.join(" ");
    }

    getLayoutDisplay(props)
    {
        const { alignment } = props

        let layoutChildren = []

        if (alignment && true)
        {
            switch (alignment)
            {
                case FlexAlign.SPACE_BETWEEN:
                    // set all elements width 100%
                    let childIndex = 0, uniqueKey = "";
                    layoutChildren = props.children.map((control) => 
                    {
                        uniqueKey = Randomizer.getUniqueString();
                        const element = React.cloneElement(control, { key: uniqueKey, index:childIndex, classes:"flex-space" })
                        childIndex++;
                        return (
                            element
                        )
                    });
                break;
            }
        }

        return layoutChildren;
    }
}

export default UIFlexLayout;