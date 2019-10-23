// https://mobx.js.org/README.html

import React from "react"
import BaseProvider from "./core/BaseProvider";

import MobxStore from "./mobx/MobxStore"

class MobxProvider extends BaseProvider
{
    constructor(app)
    {
        super();

        if (!BaseProvider._instance) BaseProvider._instance = this;

        this._app = app;
    }

    render()
    {
        console.log("MobxProvider._instance:", BaseProvider._instance)
        return ( <div></div> )
    }
}

export default MobxProvider