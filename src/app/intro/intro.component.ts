import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  @Input() mergeSortQuantity: number;
  @Input() eliminationQuantity: number;
  @Output() choseAlgorithm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  public chooseAlgorithm(algorithm: string) {
    this.choseAlgorithm.emit(algorithm);
  }
}
