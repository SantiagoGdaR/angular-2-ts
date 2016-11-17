import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../shared/product.service'
import { Product } from '../product'

@Component({
  templateUrl: 'app/product/detail/product.component.html',
  styleUrls: ['app/product/shared/product.component.css']
})
export class ProductComponent implements OnInit{
    constructor(
        private productService: ProductService,        
        private route: ActivatedRoute,
        private router: Router
    ){};

    product: Product;

    ngOnInit(): void {
        let x: number;
        this.route.params.switchMap((params: Params) => 
            +params['id']
        ).subscribe(
            (value: any) => console.log(this.numberID)
        );
    }
}
