import { Component } from '@angular/core';
import { Localizer } from '../l10n/localizer.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent  {

  constructor(private localizer: Localizer) {

  }

  name = this.localizer.getDate();




}
