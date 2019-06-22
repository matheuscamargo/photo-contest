import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  // To display.
  photoA: Photo;
  photoB: Photo;
  votedFor = -1;
  
  allPhotos: Photo[];
  currentPhotos: Photo[];
  result: Photo[];
  nextLevel: Photo[];

  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.allPhotos = this.photoService.getPhotos();
    this.initializeVoting();
  }

  onVoted(photo: string) {
    this.applyVote(photo);
  }

  initializeVoting() {
    this.currentPhotos = this.allPhotos;
    this.result = new Array();
    this.nextLevel = new Array();
    this.updateView();
  }

  applyVote(votedForIndex: string) {
    // Logic only supports powers of 2.
    var votedFor: Photo;
    var notVotedFor: Photo;

    if (this.currentPhotos.length == 0) {
      return;
    }

    if (votedForIndex == 'a') {
      notVotedFor = this.currentPhotos.pop();
      votedFor = this.currentPhotos.pop();
    }
    else if (votedForIndex == 'b') {
      votedFor = this.currentPhotos.pop();
      notVotedFor = this.currentPhotos.pop();
    }
    else {
      // Add error.
      return;
    }

    this.result.push(notVotedFor);
    this.nextLevel.push(votedFor);

    if (this.currentPhotos.length == 0) {
      this.currentPhotos = this.nextLevel;
      this.nextLevel = new Array();
    }
    
    if (this.currentPhotos.length == 1) {
      this.result.push(this.currentPhotos.pop());
      return;
    }

    this.updateView();
  }

  updateView() {
    var currentLevelSize = this.currentPhotos.length;
    if (currentLevelSize < 2) {
      // Finish logic.
      return;
    }

    this.photoA = this.currentPhotos[currentLevelSize - 2];
    this.photoB = this.currentPhotos[currentLevelSize - 1];
  }
}
