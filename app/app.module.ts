import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './product/products.component';
import { ProductComponent } from './product/detail/product.component';
import { ProductService } from './product/shared/product.service';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        FormsModule,
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
        PaginationComponent
    ],
    providers:[
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}