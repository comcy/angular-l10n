import { Injectable } from "@angular/core";

@Injectable()
export class SettingsService {

  constructor() {

  }

  getNowString() {
    return 'NOW';
  }
  
  getAnotherString() {
    return 'ANOTHER';
  }

}
