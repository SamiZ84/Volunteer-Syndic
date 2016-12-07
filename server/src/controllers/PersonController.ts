/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import PersonBusiness = require("./../app/business/PersonBusiness");
import IBaseController = require("./BaseController");
import IPerson = require("./../app/model/interfaces/IPerson");

class PersonController implements IBaseController <PersonBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var model: IPerson = <IPerson>req.body;
            var myBusiness = new PersonBusiness();
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
            var model: IPerson = <IPerson>req.body;
            var _id: string = req.params._id;
            var myBusiness = new PersonBusiness();
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
            var myBusiness = new PersonBusiness();
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

            var myBusiness = new PersonBusiness();
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
            var myBusiness = new PersonBusiness();
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
export = PersonController;