/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import {AppartmentService} from "../../services/appartment.service";
import {AppartmentVm} from "../../models/appartmentVm";
import { Router } from '@angular/router';


@Component({
    selector: 'my-appartments',
    templateUrl: './app/components/appartments/appartments.component.html',
    styleUrls: ['./app/components/appartments/appartments.component.css']
})

export class AppartmentsComponent implements OnInit {
    appartments: AppartmentVm[];
    error: any;

    constructor(
        private router: Router,
        private myService: AppartmentService) { }
    ngOnInit() {
        this.getAppartments();
    }
    getAppartments() {
        this.myService.getAppartments().then(app => this.appartments = app);
    }
    addAppartment() {
        this.router.navigate(['/appartment', 'new']);
    }
    deleteAppartmentById(appartmentId: string, event: any) {
        event.stopPropagation();
        this.myService
            .deleteById(appartmentId)
            .then(res => {
                this.appartments = this.appartments.filter(h => h._id != appartmentId);
            })
            .catch(
                error => this.error = error
            );
    }
    displayDetail(appartmentId: string) {
        this.router.navigate(['/appartment', appartmentId]);
    }
}