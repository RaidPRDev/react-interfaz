import GlobalStyleTheme from "../../theme/GlobalStyleTheme";

import "../../theme/styles/src/AppStyles.css";

class DefaultTheme extends GlobalStyleTheme
{
    constructor()
    {
        super();
    }

    initialize()
    {
        console.log("DefaultTheme.initialize");

        this.initializeStyleProviders();
    }

    initializeStyleProviders()
    {
        console.log("DefaultTheme.initializeStyleProviders");
    }
}

export default DefaultTheme;