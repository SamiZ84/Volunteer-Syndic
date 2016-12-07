/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import AppartmentBusiness = require("./../app/business/AppartmentBusiness");
import IBaseController = require("./BaseController");
import IAppartment = require("./../app/model/interfaces/IAppartment");

class AppartmentController implements IBaseController <AppartmentBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {
            var model: IAppartment = <IAppartment>req.body;
            var myBusiness = new AppartmentBusiness();
            myBusiness.create(model, (error, result) => {
                if(error) res.send({"errorCreate": error});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var model: IAppartment = <IAppartment>req.body;
            var _id: string = req.params._id;
            var myBusiness = new AppartmentBusiness();
            myBusiness.update(_id, model, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
            var _id: string = req.params._id;
            var myBusiness = new AppartmentBusiness();
            myBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            var myBusiness = new AppartmentBusiness();
            myBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var myBusiness = new AppartmentBusiness();
            myBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = AppartmentController;