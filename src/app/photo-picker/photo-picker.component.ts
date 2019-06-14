import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-picker',
  templateUrl: './photo-picker.component.html',
  styleUrls: ['./photo-picker.component.scss']
})
export class PhotoPickerComponent implements OnInit {
  @Input() photo1: Photo;
  @Input() photo2: Photo;
  @Output() votedForPhoto = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  vote(photo: number) {
    if (photo != 1 && photo != 2) {
      return;
    }

    this.votedForPhoto.emit(photo);
  }
}
