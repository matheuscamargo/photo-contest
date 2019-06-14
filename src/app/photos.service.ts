import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {  
  PHOTOS: Photo[] = [
    { index: 0, filePath: "0" },
    { index: 1, filePath: "1" },
    { index: 2, filePath: "2" },
    { index: 3, filePath: "3" },
    { index: 4, filePath: "4" },
    { index: 5, filePath: "5" },
    { index: 6, filePath: "6" },
    { index: 7, filePath: "7" }
  ];

  constructor() { }

  getPhotos(): Photo[] {
    return this.PHOTOS;
  }
}
