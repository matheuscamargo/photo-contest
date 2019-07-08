import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';
import { ResultGroup } from './result-group';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.scss']
})
export class FinalOrderComponent implements OnInit {
  @Input() results: ResultGroup[];
  public formLink: string;
  private formResult: number[];

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formResult = this.getFormArray(this.results);
    this.formLink = this.formService.getFormLink(this.formResult);
  }

  private getFormArray(results: ResultGroup[]): number[] {
    let length = 0;
    for (let result of this.results) {
      length += result.photos.length;
    }

    let output = new Array(length);
    for (let result of this.results) {
      for (let photo of result.photos) {
        output[photo.index] = result.score;
      }
    }

    return output;
  }
}