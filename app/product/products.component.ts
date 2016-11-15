import { Component, OnInit } from '@angular/core';

import { ProductService } from './product.service'
import { Product } from './product'

@Component({
  templateUrl: 'app/product/products.component.html'
})
export class ProductsComponent implements OnInit{
    constructor(private productService: ProductService){};
    title = 'This is our products catalogue!';
    products: Product[];

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => this.products = products,
            err => console.log("Custom Error: " + err)
        );
    }
}
