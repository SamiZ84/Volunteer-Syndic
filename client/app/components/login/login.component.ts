/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from "../../services/account.service";
import { AccountVm } from "../../models/accountVm";

@Component({
    selector: 'my-login',
    templateUrl: './app/components/login/login.component.html',
    styleUrls: ['./app/components/login/login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    accountForm: FormGroup;

    accountDtl: AccountVm;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private service: AccountService) {
    }

    ngOnInit() {
        this.initAccountFormValidator(this.fb);
    }

    initAccountFormValidator(fb: FormBuilder) {
        this.accountDtl = new AccountVm();

        this.accountForm = fb.group({
            accountDtl: fb.group({
                lastName: [
                    "",
                    Validators.compose([Validators.minLength(2), Validators.required, Validators.maxLength(50)])
                ],
                firstName: [
                    "",
                    Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])
                ],
                email: [
                    "",
                    Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])
                ],
                password: [
                    "",
                    Validators.required
                ],
                passwordconfirm: [
                    "",
                    Validators.required
                ]
            })
        });

        this.loginForm = fb.group({
                login: [
                    "",
                    Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])
                ],
                password: [
                    "",
                    Validators.required
                ],
        });
    }

    saveCreatingAccount(model: AccountVm) {
        this.service.save(model);
        var account = this.service.Login(model.email, model.password);
        if (account)
            this.router.navigate(['/news']);
    }

    login(form: FormGroup) {
        console.log('should register:', form.value);
        if (this.service.Login(form.value.login, form.value.password)) {
            this.router.navigate(['/news']);
        }

        form.reset();
    }
}