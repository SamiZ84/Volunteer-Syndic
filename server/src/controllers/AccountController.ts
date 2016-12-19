/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import AccountBusiness = require("./../app/business/AccountBusiness");
import IBaseController = require("./BaseController");
import IAccount = require("./../app/model/interfaces/IAccount");

class AccountController implements IBaseController <AccountBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var model: IAccount = <IAccount>req.body;
            var myBusiness = new AccountBusiness();
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
            var model: IAccount = <IAccount>req.body;
            var _id: string = req.params._id;
            var myBusiness = new AccountBusiness();
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
            var myBusiness = new AccountBusiness();
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
            var myBusiness = new AccountBusiness();
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
            var myBusiness = new AccountBusiness();
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
    find(req: express.Request, res: express.Response): void {
        try {
            var cond: Object = {'email': req.params.login, 'password': req.params.pwd};
            var myBusiness = new AccountBusiness();
            myBusiness.find(cond, (error, result) => {
                if(error) res.send({"error": "error"});
                else {
                    if (result.length == 0)
                         res.send({"error": "account not found"});
                    else
                        res.send(result[0]);
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});
        }
    }
}
export = AccountController;