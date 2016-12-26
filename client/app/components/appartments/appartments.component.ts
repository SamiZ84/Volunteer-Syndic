/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component } from '@angular/core';
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

export class AppartmentsComponent {
    private appartments: AppartmentVm[];
    private filter: string = "";
    error: any;

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
        private myService: AppartmentService) {
        this.getAppartments();
    }

    getAppartments() {
        this.myService.getAppartments().then(app => {
            let _sort:SortDescriptor[] = [];
            _sort.push({
                        dir: "asc",
                        field: "block"
                    },{
                        dir: "asc",
                        field: "num"
                    });
            this.appartments = app;
            this.appartments = orderBy(this.appartments, _sort);
            this.refreshData(this.appartments);
        });
    }

    protected onPageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        var data = this.filterData(); 
        this.refreshData(data);
    }
    
    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        var data = this.filterData(); 
        this.refreshData(data);
    }

    private refreshData(data: AppartmentVm[]): void {
        this.gridView = {
            data: (data != undefined) ? (orderBy(data, this.sort).slice(this.skip, this.skip + this.pageSize)) : [],
            total: (data != undefined) ? data.length : 0
        };
    }

    private filterData(): AppartmentVm[] {
        var filtred = this.appartments.filter(app => ((app.block.toLowerCase() + app.num).indexOf(this.filter.toLowerCase()) != -1)
            || (app.owner.firstName.toLowerCase().indexOf(this.filter.toLowerCase()) != -1) || (app.owner.lastName.toLowerCase().indexOf(this.filter.toLowerCase()) != -1)
            || (app.resident.firstName.toLowerCase().indexOf(this.filter.toLowerCase()) != -1) || (app.resident.lastName.toLowerCase().indexOf(this.filter.toLowerCase()) != -1));

        return filtred;
    }

    private change() {
        var data = this.filterData();

        this.skip = 0;
        this.refreshData(data);
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