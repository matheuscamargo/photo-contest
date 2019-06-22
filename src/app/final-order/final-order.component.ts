import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.scss']
})
export class FinalOrderComponent implements OnInit {
  @Input() result: Photo[];

  photos: Photo[][];

  constructor() { }

  ngOnInit() {
    this.arrangePhotosBasedOnScore(this.result);
  }

  arrangePhotosBasedOnScore(photos: Photo[]) {
    var currentLevel = 0;
    var currentLevelSize = 1;
    this.photos = new Array();
    this.photos.push(new Array);

    for (let photo of photos) {      
      if (this.photos[currentLevel].length == currentLevelSize) {
        this.photos.push(new Array);
        currentLevel++;
        currentLevelSize *= 2;
      }

      this.photos[currentLevel].push(photo);
    }
  }
}
