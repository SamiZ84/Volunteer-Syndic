import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {PersonVm} from "../models/personVm";

@Injectable()
export class PersonService {

    private serviceUrl = 'api/persons';  // URL to web api

    constructor(private http: Http) { }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getPersons(): Promise<PersonVm[]> {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getPerson(id: string) {
        return this.http.get(this.serviceUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(vm: PersonVm): Promise<PersonVm>  {
        if (vm._id) {
            return this.put(vm);
        }
        return this.post(vm);
    }

    private post(vm: PersonVm): Promise<PersonVm> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.serviceUrl, JSON.stringify(vm), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(vm: PersonVm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${vm._id}`;

        return this.http
            .put(url, JSON.stringify(vm), {headers: headers})
            .toPromise()
            .then(() => vm)
            .catch(this.handleError);
    }

    delete(vm: PersonVm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${vm._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    deleteById(id: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }
}