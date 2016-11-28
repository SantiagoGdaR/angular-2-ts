import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product } from '../product';

@Injectable()
export class ProductService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private productsUrl = 'app/products';  // URL to web api
    product: Product;

    constructor(private http: Http) { }

    getProducts(): Observable<Product[]>{         
        return this.http
                .get(this.productsUrl)
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                .map((r: Response) => r.json().data as Product[]);
    }

    getProduct(id: number): Observable<Product>{  
        return new Observable<Product>(
            observer => this.getProducts().subscribe(
                products => observer.next(products.filter(product => product.id === id)[0]),
                err => console.log("Custom Error: " + err)
            )            
        );
    }

    update(product: Product): Observable<Product> {
        const url = `${this.productsUrl}/${product.id}`;
        return this.http
            .put(url, JSON.stringify(product), {headers: this.headers})
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
            .map(() => product);
    }
}
