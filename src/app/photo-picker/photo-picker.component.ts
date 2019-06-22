import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-picker',
  templateUrl: './photo-picker.component.html',
  styleUrls: ['./photo-picker.component.scss']
})
export class PhotoPickerComponent implements OnInit {
  @Input() photoA: Photo;
  @Input() photoB: Photo;
  @Output() votedForPhoto = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  vote(photo: string) {
    if (photo != 'a' && photo != 'b') {
      return;
    }

    this.votedForPhoto.emit(photo);
  }
}
