import React from "react"

import '../index.css';

import DefaultTheme from "./theme/DefaultTheme";

import MainHeader from "./panels/MainHeader"
import MainFooter from "./panels/MainFooter"
import FormScreen from "./screens/FormScreen";
import TestScreen from "./screens/TestScreen";
import Test02Screen from "./screens/Test02Screen";
import UILabel from "../controls/UILabel";
import MainScreen from "./screens/MainScreen";
import UIButton from "../controls/UIButton";
import UIImage from "../controls/UIImage";
import FlexAlign from "../layout/FlexAlign";
import UIFlexLayout from "../layout/UIFlexLayout";

class App extends React.Component 
{
    constructor(props) 
    {
        super(props)

        this.state = {
            isLoggedIn: true
        }

        // set theme
        this._theme = new DefaultTheme();
    }

    componentDidMount()
    {
        console.log("App.componentDidMount")
    }

    render() 
    {
        console.log("App.render", this.props)

        const appName = "AppTest"
        const appVersion = "v1.0.0"
    
        return (
            <div>
                <div>Welcome to {appName + " " + appVersion}</div>
                <div>{`${appName} ${appVersion}`}</div>
                <div>You are currently logged { (this.state.isLoggedIn) ? "in" : "out" }</div>
                <MainHeader 
                    classes="main-header" 
                    layout={UIFlexLayout}
                    alignment={FlexAlign.SPACE_BETWEEN} 
                >
                    <UILabel text="React Test Base" 
                        layout={UIFlexLayout} 
                        verticalAlignment={FlexAlign.VERTICAL_MIDDLE}  
                        paddingLeft="10px"
                    />
                    
                    <UIButton 
                        label="Rafael" 
                        icon="logo512.png" 
                        classes="blue" 
                        gap="10px"
                        layout={UIFlexLayout}
                        verticalAlignment={FlexAlign.VERTICAL_MIDDLE} 
                        horizontalAlignment={FlexAlign.HORIZONTAL_CENTER} 
                    />

                    <UIButton 
                        classes="red" 
                        gap="10px"
                        layout={UIFlexLayout}
                        alignment={FlexAlign.CENTER} 
                        onClick={(e) => this.onClick(e)} 
                    >
                        <UIImage source={"logo512.png"} classes="item-icon" />  
                        <UILabel text={"Jose"}/>  
                    </UIButton>

                </MainHeader>
                <Test02Screen />
                <TestScreen />
                <FormScreen>
                    <UILabel text="Text Input Field Examples" />
                    <UILabel text="Rafael" />
                </FormScreen>
                <MainScreen />
                <MainFooter />
            </div>
        )
    }

    onClick(e)
    {

    }

}

export default App