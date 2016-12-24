import { Injectable } from '@angular/core';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import { AccountVm } from "../models/accountVm";

@Injectable()
export class AccountService {
    public loggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);
    public account: Subject<AccountVm> = new BehaviorSubject<AccountVm>(null);

    private serviceUrl = 'api/accounts';  // URL to web api

    constructor(private http: Http) { }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    // getAccountByLogin(login: string, pwd: string) {
    //     return this.http.get(this.serviceUrl + '/' + login + '/' + pwd)
    //         .toPromise()
    //         .then(response => response.json())
    //         .catch(this.handleError);
    // }

    save(vm: AccountVm): Promise<AccountVm> {
        if (vm._id) {
            return this.put(vm);
        }
        return this.post(vm);
    }

    private post(vm: AccountVm): Promise<AccountVm> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.serviceUrl, JSON.stringify(vm), { headers: headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(vm: AccountVm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${vm._id}`;

        return this.http
            .put(url, JSON.stringify(vm), { headers: headers })
            .toPromise()
            .then(() => vm)
            .catch(this.handleError);
    }

    Login(login: string, pwd: string) {
        let url = `${this.serviceUrl+'/login'}/${login}/${pwd}`;
        // let url = this.serviceUrl+'/login';
        // let params: URLSearchParams = new URLSearchParams();
        // params.set('login', login);
        // params.set('pwd', pwd);

        // return this.http.get(url, {
        //     search: params
        // })
        return this.http.get(url)
            .toPromise()
            .then(response => {
                var res = response.json();
                if (res) {
                    this.loggedIn.next(true);
                    this.account.next(res);
                }
                return res;
            })
            .catch(this.handleError);
    }
}