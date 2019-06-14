import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  photos: Photo[];
  photo1: Photo;
  photo2: Photo;

  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.photos = this.photoService.getPhotos();
    this.photo1 = this.photos[0];
    this.photo2 = this.photos[1];
  }
}
