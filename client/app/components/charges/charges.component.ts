/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, OnInit } from '@angular/core';
import { ChargesVm, baseCharge, chargeType } from "../../models/chargesVm";
import { Router } from '@angular/router';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
    selector: 'my-charges',
    templateUrl: './app/components/charges/charges.component.html',
    styleUrls: ['./app/components/charges/charges.component.css']
})

export class ChargesComponent implements OnInit {
    private model: ChargesVm;
    private tmpCharge: baseCharge;
    private filter: string = "";
    chargeType : typeof chargeType = chargeType;   
    error: any;

    private chargeTypeKeys: string[];

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
        private router: Router) {
        //this.chargeTypeKeys = Object.keys(chargeType).filter(Number);
    }
    
    ngOnInit() {
        this.model = new ChargesVm([]);
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

    private refreshData(data: baseCharge[]): void {
        this.gridView = {
            data: (data != undefined) ? (orderBy(data, this.sort).slice(this.skip, this.skip + this.pageSize)) : [],
            total: (data != undefined) ? data.length : 0
        };
    }

    private filterData(): baseCharge[] {
        var filtred = this.model.charges.filter(app => app.title.toLowerCase().indexOf(this.filter.toLowerCase()) != -1);
        return filtred;
    }

    private change(): void {
        var data = this.filterData();
        this.skip = 0;
        this.refreshData(data);
    }

    deleteById(id: string, event: any) {
        event.stopPropagation();
        this.model.charges = this.model.charges.filter(h => h._id != id);
    }

    displayDetail(id: string) {
        var res = this.model.charges.filter(h => h._id == id);
        if (res.length == 1)
            this.tmpCharge = res[0];
    }

    addCharge() {
        this.tmpCharge = new baseCharge();
    }

    cancel() {
        this.tmpCharge = null;
    }

    saveDetail(){
        this.tmpCharge.creationDate = new Date(Date.now());
        this.model.charges.push(this.tmpCharge);
        this.tmpCharge = null;
        this.change();
    }
    
    parseValue(value : string) {
        this.tmpCharge.type = chargeType[value];
    }
}