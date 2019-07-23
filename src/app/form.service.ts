import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormService {
  readonly googleFormsUrl = environment.formsUrl;

  constructor() { }

  getFormLink(scores: number[]) {
    var result = this.googleFormsUrl;
    scores.forEach(function (score, _) {
      result = result.replace('=0', '=' + score);
    });
    return result;
  }
}