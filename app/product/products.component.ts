import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from './shared/product.service';
import { Product } from './product';
import {PaginationConfig} from '../shared/pagination/paginationConfig';

@Component({
  templateUrl: 'app/product/products.component.html',
  styleUrls: ['app/product/shared/product.component.css']
})
export class ProductsComponent implements OnInit{        
    title = 'This is our products catalogue!';
    products: Product[];
    productsPaginated: Product[];
    paginationConfig: PaginationConfig = new PaginationConfig();    

    constructor(
        private productService: ProductService, 
        private router: Router
    ){};

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.paginationConfig.total = products.length; 
                this.paginationConfig.itemsPerPage = 5;
                this.setProductsPaginated(1);               
            },
            err => console.log("Custom Error: " + err)
        );
    }
    
    onSelect(product: Product) {
        this.router.navigate(['/product', product.id]);
    }

    setProductsPaginated(page){
        this.productsPaginated = this.products.filter((product, index) =>
         (this.paginationConfig.itemsPerPage * (page -1)) <= index &&
            (this.paginationConfig.itemsPerPage * (page)) > index );
    }
}
