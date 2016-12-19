/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { AppartmentService } from "../../services/appartment.service";
import { AppartmentVm } from "../../models/appartmentVm";
import { Router } from '@angular/router';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
    selector: 'my-appartments',
    templateUrl: './app/components/appartments/appartments.component.html',
    styleUrls: ['./app/components/appartments/appartments.component.css']
})

export class AppartmentsComponent implements OnInit, OnChanges {
    @Input() appartments: AppartmentVm[];
    error: any;
    private products: any[];

    private gridView: GridDataResult;
    private pageSize: number = 5;
    private skip: number = 0;
    private sort: SortDescriptor[] = [];

    private pagerSetting: any = {
        "buttonCount": 5,
        "info": true,
        "type": 'numeric',
        "pageSizes": true,
        "previousNext": true
    };

    constructor(
        private router: Router,
        private myService: AppartmentService) { }

    ngOnInit() {
        this.getAppartments();

        this.products = Array(100).fill({}).map((x, idx) => ({
            "ProductID": idx,
            "ProductName": "Product" + idx,
            "Discontinued": idx % 2 === 0
        }));
    }
    ngOnChanges() {
        this.refreshData();
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
    
    protected onPageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        this.refreshData();
    }

    private refreshData(): void {
        this.gridView = {
            data: (this.appartments != undefined) ? (orderBy(this.appartments, this.sort).slice(this.skip, this.skip + this.pageSize)) : [],
            total: (this.appartments != undefined) ? this.appartments.length : 0
        };
    }
}