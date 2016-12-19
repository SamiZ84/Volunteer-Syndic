/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
    selector: 'ai-grid',
    templateUrl: './app/components/shared/kendoGrid/grid.component.html',
    styleUrls: ['./app/components/shared/kendoGrid/grid.component.css']
})

export class KendoGridComponent {
    @Input() private data: any[];
    @Input() private columns: string[];
    @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

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

    ngOnInit() {
        this.refreshData();
    }

    ngOnChange() : void {
        this.refreshData();
    }

    protected onPageChange({ skip, take }: PageChangeEvent): void {
        this.skip = skip;
        this.pageSize = take;
        this.refreshData();
    }

    protected onSortChange(sort: SortDescriptor[]): void {
        this.sort = sort;
        this.refreshData();
    }

    private refreshData(): void {
        this.gridView = {
            data: (this.data != undefined) ? (orderBy(this.data, this.sort).slice(this.skip, this.skip + this.pageSize)) : [],
            total: (this.data != undefined) ? this.data.length : 0
        };
    }

    onRowClicked() {
        this.rowClicked.emit(this.gridView.data);
    }
}