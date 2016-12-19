/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { AccountVm } from "../../models/accountVm";
import { AccountService } from "../../services/account.service";

@Component({
    selector: 'my-menu',
    templateUrl: './app/components/menu/menu.component.html',
    styleUrls: ['./app/components/menu/menu.component.css']
})

export class MenuComponent {
    public LoggedIn: boolean;
    public Account: AccountVm;

    constructor(private service: AccountService) {
        this.service.loggedIn.subscribe(p=> this.LoggedIn = p );
        this.service.account.subscribe(p=> this.Account = p );
    }
}