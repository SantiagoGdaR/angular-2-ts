import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../shared/product.service'
import { Product } from '../product'

@Component({
  templateUrl: 'app/product/edit/product-edit.component.html',
  styleUrls: ['app/product/shared/product.component.css']
})
export class ProductEditComponent implements OnInit{
    constructor(
        private productService: ProductService,        
        private route: ActivatedRoute,                
        private location: Location
    ){};

    product: Product;

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => 
            params['id']
        ).subscribe(
            (int: number) => this.productService.getProduct(+int).subscribe(
                product => this.product = product,
                err => console.log(err)
            )
        );
    }

    goBack(){
        this.location.back();
    }
}
