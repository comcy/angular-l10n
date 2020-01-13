import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { LocalizerService } from "../l10n/localizer.service";
import { Localizer } from "../l10n/localizer.interface";
import { SettingsService } from '../settings/settings.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [{ provide: Localizer, useClass: LocalizerService }, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
