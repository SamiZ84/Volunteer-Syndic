import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppartmentVm} from "../models/appartmentVm";
import { PersonService } from './person.service';;

@Injectable()
export class AppartmentService {

    private serviceUrl = 'api/appartments';  // URL to web api

    constructor(private http: Http) { }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getAppartments(): Promise<AppartmentVm[]> {
        return this.http.get(this.serviceUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getAppartment(id: string) {
        return this.http.get(this.serviceUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(vm: AppartmentVm): Promise<AppartmentVm>  {
        if (vm._id) {
            return this.put(vm);
        }
        return this.post(vm);
    }

    private post(vm: AppartmentVm): Promise<AppartmentVm> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.serviceUrl, JSON.stringify(vm), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(vm: AppartmentVm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.serviceUrl}/${vm._id}`;

        return this.http
            .put(url, JSON.stringify(vm), {headers: headers})
            .toPromise()
            .then(() => vm)
            .catch(this.handleError);
    }

    delete(vm: AppartmentVm) {
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