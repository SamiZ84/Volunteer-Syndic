/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


import { AppartmentVm } from "../../models/appartmentVm";
import { ActivatedRoute, Params } from '@angular/router';
import { AppartmentService } from "../../services/appartment.service";

@Component({
    selector: 'my-appartmentDetail',
    templateUrl: './app/components/appartmentDetail/appartmentDetail.component.html',
    styleUrls: ['./app/components/appartmentDetail/appartmentDetail.component.css']
})

export class AppartmentDetailComponent implements OnInit, OnChanges {
    @Input() model: AppartmentVm;
    isNew = false;
    error: any;
    residentIsSameTheOwner = 'hidden';

    constructor(
        private myService: AppartmentService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.isNew = true;
                this.model = new AppartmentVm();
            } else {
                this.isNew = false;
                this.myService.getAppartment(id)
                    .then(model => this.model = model);
            }
        });
    }

    save() {
        this.myService
            .save(this.model)
            .then(model => {
                this.model = model; // saved hero, w/ id if new
                this.goBack();
            })
            .catch(
                error => this.error = error
            ); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }

    ngOnChanges() {
        this.residentIsSameTheOwner = this.model.residentIsOwner ? 'shown' : 'hidden';
    }
}