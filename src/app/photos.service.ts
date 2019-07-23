import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class PhotosService {  
  photos: Photo[];

  constructor() { 
    this.photos = new Array();
    for (var i = 0; i < environment.numberOfPhotos; i++) {
      this.photos.push({ index: i, filePath: i.toString() });
    }
  }

  getPhotos(): Photo[] {
    return this.photos;
  }
}
