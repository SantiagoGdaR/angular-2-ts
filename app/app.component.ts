import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { ProductOpenNotificationService } from './shared/notifications/product-open-notification.service';

@Component({
  selector: 'app-component',
  templateUrl: 'app/app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app/generic-styles/generic-classes.css', 
    'app/generic-styles/generic-elem-styles.css'
    ]
})
export class AppComponent implements OnInit{
  productsVisited: number = 0;

  constructor(private _productOpenNotification : ProductOpenNotificationService){ }
    
  ngOnInit(): void{
    this._productOpenNotification.getProductOpenObservable().subscribe(
      () => this.productsVisited++,
      (err) => console.log("Custom Error: " + err)
    );
  }

}
