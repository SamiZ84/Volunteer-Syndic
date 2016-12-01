/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import ResidentBusiness = require("./../app/business/ResidentBusiness");
import IBaseController = require("./BaseController");
import IResident = require("./../app/model/interfaces/IResident");

class ResidentController implements IBaseController <ResidentBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var model: IResident = <IResident>req.body;
            var myBusiness = new ResidentBusiness();
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
            var model: IResident = <IResident>req.body;
            var _id: string = req.params._id;
            var myBusiness = new ResidentBusiness();
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
            var myBusiness = new ResidentBusiness();
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

            var myBusiness = new ResidentBusiness();
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
            var myBusiness = new ResidentBusiness();
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
export = ResidentController;