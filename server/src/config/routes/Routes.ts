/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import HeroRoutes = require('../routes/HeroRoutes');
import OwnerRoutes = require('../routes/OwnerRoutes');
import ResidentRoutes = require('../routes/ResidentRoutes');
import AppartmentRoutes = require('../routes/AppartmentRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new HeroRoutes().routes);
        app.use("/", new OwnerRoutes().routes);
        app.use("/", new ResidentRoutes().routes);
        app.use("/", new AppartmentRoutes().routes);
        
        return app;
    }
}
export = Routes;