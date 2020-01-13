import { Injectable } from '@angular/core';
// import { Localizer } from 'l10n';


@Injectable()
export abstract class Localizer {
  /**
   * Returns a list of all of the current user's todos.
   */
  abstract getDate(): string;

  abstract getTime(): string;

  abstract getDateAndTime(): string;
}
