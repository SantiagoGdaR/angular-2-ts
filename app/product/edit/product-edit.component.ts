import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../shared/product.service'
import { Product } from '../product'
import { validateNumber } from '../../shared/validations/number-validation'

@Component({
  templateUrl: 'app/product/edit/product-edit.component.html',
  styleUrls: ['app/product/shared/product.component.css']
})
export class ProductEditComponent implements OnInit{
    product: Product;
    productForm: FormGroup;
    formErrors = {
        'title': '',
        'description': '',
        'price': ''
    };
    validationMessages = {
        'title': {
            'required': 'Title is required.',
            'maxlength': 'Title cannot be more than 24 characters long.'
        },
        'description': {
            'required': 'Description is required.'

        },
        'price': {
            'required': 'Price is required.',
            'validateNumber': 'Must be a number'
        }
    }

    constructor(
        private productService: ProductService,        
        private route: ActivatedRoute,  
        private router: Router,              
        private location: Location,
        private fb: FormBuilder
    ){};

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => 
            params['id']
        ).subscribe(
            (int: number) => this.productService.getProduct(+int).subscribe(
                product => {
                    this.product = product;
                    this.buildForm();
                },
                err => console.log("Custom Error: " + err)
            )
        );
    }

    buildForm(){
         this.productForm = this.fb.group({
            'title': [this.product.title, [
                    Validators.required,
                    Validators.maxLength(24)
                ]
            ],
            'description': [this.product.description,[
                    Validators.required,
                    Validators.maxLength(250)
                ]
            ],
            'price': [this.product.price, [
                    Validators.required, 
                    validateNumber
                ]            
            ],
            'image': [this.product.image],
            'id':[this.product.id]
        });
        this.productForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data){
        if(!this.productForm){ return; }        
        let form = this.productForm;

        for(let field in this.formErrors){
            // clear previous error message (if any)
            this.formErrors[field] = '';
            let control = form.get(field);
            if(control && control.dirty && !control.valid){
                let messages = this.validationMessages[field];
                for(let key in control.errors){
                    this.formErrors[field] += messages[key] + ' ';
                }
            }    
        }
    }

    onSubmit(){
       if(this.productForm && !this.productForm.invalid){
           this.product = this.productForm.value;
            this.productService.update(this.product).subscribe(
                product => this.router.navigate(['/products']),
                err => console.log("Custom Error: " + err)
            );
        }        
    }

    goBack(){
        this.location.back();
    }
}
