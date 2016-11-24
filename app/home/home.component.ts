import { Component } from '@angular/core';

import { Home } from './home';

@Component({
  templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {
    home = new Home("We\'re using interpolation in the title!", 
      "This is the description and we are going to show it in a two way binding!");
}
