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
        let url = `${this.serviceUrl + '/login'}/${login}/${pwd}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                var res = response.json();
                if (!res["error"]) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(res));
                    return true;
                }
                else {
                    this.handleError("Check your login and password \n" + res["error"]);
                    return false;
                }
            })
            .catch(this.handleError);
    }
}