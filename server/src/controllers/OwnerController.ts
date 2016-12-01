/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import OwnerBusiness = require("./../app/business/OwnerBusiness");
import IBaseController = require("./BaseController");
import IOwner = require("./../app/model/interfaces/IOwner");

class OwnerController implements IBaseController <OwnerBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var model: IOwner = <IOwner>req.body;
            var myBusiness = new OwnerBusiness();
            myBusiness.create(model, (error, result) => {
                if(error) res.send({"error": "error"});
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
            var model: IOwner = <IOwner>req.body;
            var _id: string = req.params._id;
            var myBusiness = new OwnerBusiness();
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
            var myBusiness = new OwnerBusiness();
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

            var myBusiness = new OwnerBusiness();
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
            var myBusiness = new OwnerBusiness();
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
export = OwnerController;