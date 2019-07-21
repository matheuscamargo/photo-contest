import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  readonly googleFormsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc_aBBI005lNZcfTaMFy2AEi_bzI4tJ75Bw0sOzzzGSwgrGYg/viewform?usp=pp_url&entry.468832349=0&entry.18502918=0&entry.1240903544=0&entry.2024966849=0&entry.1128203190=0&entry.1650137116=0&entry.407929624=0&entry.805346303=0&entry.307472477=0&entry.1709423003=0&entry.1115811744=0&entry.218112430=0";

  constructor() { }

  getFormLink(scores: number[]) {
    var result = this.googleFormsUrl;
    scores.forEach(function (score, _) {
      result = result.replace('=0', '=' + score);
    });
    return result;
  }
}