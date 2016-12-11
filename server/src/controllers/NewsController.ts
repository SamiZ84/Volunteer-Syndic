/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import NewsBusiness = require("./../app/business/NewsBusiness");
import IBaseController = require("./BaseController");
import INews = require("./../app/model/interfaces/INews");

class NewsController implements IBaseController <NewsBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var model: INews = <INews>req.body;
            var myBusiness = new NewsBusiness();
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
            var model: INews = <INews>req.body;
            var _id: string = req.params._id;
            var myBusiness = new NewsBusiness();
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
            var myBusiness = new NewsBusiness();
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

            var myBusiness = new NewsBusiness();
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
            var myBusiness = new NewsBusiness();
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
export = NewsController;