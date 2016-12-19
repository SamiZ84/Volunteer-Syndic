/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  GridDataResult,
  PageChangeEvent
} from '@progress/kendo-angular-grid';
import {
  SortDescriptor,
  orderBy
} from '@progress/kendo-data-query';

@Component({
    selector: 'my-home',
    templateUrl: './app/components/home/home.component.html',
    styleUrls: ['./app/components/home/home.component.css']
})

export class HomeComponent {
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

    private products: any[] = Array(100).fill({}).map((x, idx) => ({
        "ProductID": idx,
        "ProductName": "Product" + idx,
        "Discontinued": idx % 2 === 0
    }));

    constructor() {
        this.loadProducts();
    }

    protected pageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        this.loadProducts();
    }

    protected sortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: orderBy(this.products, this.sort).slice(this.skip, this.skip + this.pageSize),
            total: this.products.length
        };
    }
}