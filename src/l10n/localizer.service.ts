import { Injectable } from "@angular/core";
import { Localizer } from "./localizer.interface.ts";
import { SettingsService } from "../settings/settings.service.ts";

@Injectable()
export class LocalizerService implements Localizer {

  constructor(private settingsService: SettingsService) {

  }

  getDate() {

    const date = new Date();

    return date + "getDate()" + this.settingsService.getNowString();
  }

  getTime() {
    const date = new Date();

    return date + "getTime()";
  }

  getDateAndTime() {
    const date = new Date();

    return date + "getDateAndTime()";
  }
}
