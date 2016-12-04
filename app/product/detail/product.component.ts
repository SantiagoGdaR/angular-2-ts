import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../shared/product.service'
import { ProductOpenNotificationService } from '../../shared/notifications/product-open-notification.service';

import { Product } from '../product'

@Component({
  templateUrl: 'app/product/detail/product.component.html',
  styleUrls: ['app/product/shared/product.component.css']
})
export class ProductComponent implements OnInit{
    product: Product;

    constructor(
        private productService: ProductService,        
        private route: ActivatedRoute,                
        private location: Location,
        private _productOpenNotification : ProductOpenNotificationService
    ){};

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => 
            params['id']
        ).subscribe(
            (int: number) => this.productService.getProduct(+int).subscribe(
                product => {
                    this.product = product;
                    this._productOpenNotification.openProduct();
                },
                err => console.log("Custom Error: " + err)
            )
        );
    }

    goBack(){
        this.location.back();
    }
}
