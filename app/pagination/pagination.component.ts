import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';


@Component({
    selector: 'pagination-component',
    templateUrl: 'app/pagination/pagination.component.html',
    styleUrls: ['app/pagination/pagination.component.css']
})
export class PaginationComponent implements OnChanges {
    @Input('listLength') totalItems:number;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
    actualPage:number = 1;
    itemsPerPage:number = 5;
    pages:number[];

    ngOnChanges(changes){
        let propertyTotal = changes["totalItems"];
        if(propertyTotal != null && propertyTotal.currentValue != null){
            this.pages = Array<number>(Math.ceil(propertyTotal.currentValue / this.itemsPerPage));
        }
    }

    onPageClick(page: number){
        this.actualPage = page;
        this.pageChange.emit(page);
    }
    
    setActivePageCss(renderPage){
        return this.actualPage === renderPage;
    }

}
