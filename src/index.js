import 'react-app-polyfill/ie11';       // For IE 11 Support!

import React from "react"
import ReactDOM from "react-dom"

import App from "./app/App";
import AppRedux from './app/AppRedux';
import AppMobx from './app/AppMobx';
import Randomizer from './utils/Randomizer';

import { 
    APP_REDUX,
    APP_MOBX,
    APP_STANDARD
} from "./data/ServiceModes"

import ReduxProvider from './data/providers/ReduxProvider';
import MobxProvider from './data/providers/MobxProvider';

const ServiceMode = APP_REDUX;
const appId = "app_" + Randomizer.getUniqueString();
let app = null, provider = null;

switch (ServiceMode)
{
    case APP_REDUX:
        provider = new ReduxProvider( <AppRedux key={appId} /> )
        app = provider.render()  
        break;

    case APP_MOBX:
        provider = new MobxProvider( <AppMobx key={appId} /> )
        app = provider.render()  
        break;

    case APP_STANDARD:
        app = <App key={appId} />
        break;
}

ReactDOM.render(app, document.getElementById('root'));