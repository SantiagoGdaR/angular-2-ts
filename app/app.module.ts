import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './product/products.component';
import { ProductComponent } from './product/detail/product.component';
import { ProductEditComponent } from './product/edit/product-edit.component';
import { PaginationComponent } from './shared/pagination/pagination.component';

import { ProductService } from './product/shared/product.service';
import { ProductOpenNotificationService } from './shared/notifications/product-open-notification.service';

import { HighlightDirective } from './shared/directives/highlight.directive';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: HomeComponent
            },      
            {
                path: 'products',
                component: ProductsComponent
            },       
            {
                path: 'product/:id',
                component: ProductComponent
            },          
            {
                path: 'product/edit/:id',
                component: ProductEditComponent
            },    
            { 
                path: '', 
                component: HomeComponent 
            }
        ])
    ],
    declarations: [
        AppComponent, 
        HomeComponent,
        ProductsComponent,
        ProductComponent,
        ProductEditComponent,
        PaginationComponent,
        HighlightDirective
    ],
    providers:[
        ProductService,
        ProductOpenNotificationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}