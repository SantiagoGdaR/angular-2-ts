import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from './shared/product.service'
import { Product } from './product'

@Component({
  templateUrl: 'app/product/products.component.html',
  styleUrls: ['app/product/shared/product.component.css']
})
export class ProductsComponent implements OnInit{        
    title = 'This is our products catalogue!';
    products: Product[];

    constructor(
        private productService: ProductService, 
        private router: Router
    ){};

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => this.products = products,
            err => console.log("Custom Error: " + err)
        );
    }
    
    onSelect(product: Product) {
        this.router.navigate(['/product', product.id]);
    }
}
