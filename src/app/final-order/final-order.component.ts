import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';
import { FormService } from '../form.service';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.scss']
})
export class FinalOrderComponent implements OnInit {
  @Input() result: Photo[];

  photos: Photo[][];
  formResult: number[];
  formLink: string;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.arrangePhotosBasedOnScore(this.result);
    this.formLink = this.formService.getFormLink(this.formResult);
  }

  arrangePhotosBasedOnScore(photos: Photo[]) {
    var numberOfLevels = Math.ceil(Math.log2(photos.length + 1));
    this.formResult = new Array(photos.length);
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
      this.formResult[photo.index] = numberOfLevels - currentLevel;
    }
  }
}