import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() mergeSortQuantity: number;
  @Input() eliminationQuantity: number;
  @Output() choseAlgorithm = new EventEmitter<string>();

  constructor(private translateService: TranslateService) { }

  ngOnInit() { }

  public changeLanguage(language: string) {
    this.translateService.use(language);
  }

  public chooseAlgorithm(algorithm: string) {
    this.choseAlgorithm.emit(algorithm);
  }
}
