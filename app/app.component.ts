import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app/app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'app/generic-styles/generic-classes.css', 
    'app/generic-styles/generic-elem-styles.css'
    ]
})
export class AppComponent { }
