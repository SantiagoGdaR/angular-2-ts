import { Component } from '@angular/core';

import { Home } from './home';

@Component({
  templateUrl: 'app/home/home.component.html'
})
export class HomeComponent {
    private _homeDefaultText: string = "This is the description and we are going to show it in a two way binding!";
    private _homeBtnDefaultText: string = "Event Binding!";

    home = new Home("We\'re using interpolation in the title!", this._homeDefaultText);
    homeDefaultDescriptionChanged: boolean = false;
    homeBtnText: string = this._homeBtnDefaultText;
    changeFontColor: boolean = false;
    disableInput: boolean = false;



    onBtnEventBindingClick(){
      this.homeDefaultDescriptionChanged = !this.homeDefaultDescriptionChanged;
      this.home.description = this.homeDefaultDescriptionChanged ? "description changed by click event!" : this._homeDefaultText;
      this.homeBtnText = this.homeDefaultDescriptionChanged ? "Reset Text!" : this._homeBtnDefaultText;
    }

    onModelDescriptionChange(newValue){
      this.homeDefaultDescriptionChanged = true;
      this.homeBtnText = "Reset Text!";
      this.home.description = newValue;
    }

    onChangeFontColorClick(){
      this.changeFontColor = !this.changeFontColor;
    }

    onDisableBothInputsClick(){
      this.disableInput =  !this.disableInput;
    }
}
