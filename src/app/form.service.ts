import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  readonly googleFormsUrl = "https://docs.google.com/forms/d/e/1FAIpQLScnVETJbv3uajya7Ap6n2XSA7pskm-_YNWFbYfDr9Nim0Gmcg/viewform?usp=pp_url&entry.1704513406=0&entry.2016995176=0&entry.582347936=0&entry.721081952=0&entry.851699322=0&entry.1757762361=0&entry.903665290=0&entry.271031929=0&entry.777101610=0&entry.1213855026=0&entry.1172318361=0&entry.198847752=0&entry.651616159=0&entry.735627302=0&entry.1923642683=0&entry.1801247082=0";

  constructor() { }

  getFormLink(scores: number[]) {
    var result = this.googleFormsUrl;
    scores.forEach(function (score, _) {
      result = result.replace('=0', '=' + score);
    });
    return result;
  }
}