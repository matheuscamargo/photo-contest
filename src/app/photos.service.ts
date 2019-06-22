import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {  
  photos: Photo[];

  constructor() { 
    this.photos = new Array();
    for (var i = 0; i < 16; i++) {
      this.photos.push({ index: i, filePath: i.toString() });
    }
  }

  getPhotos(): Photo[] {
    return this.photos;
  }
}
