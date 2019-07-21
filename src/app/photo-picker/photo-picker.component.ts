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
  @Input() quantityOfRemainingRounds: number;
  @Output() votedForPhoto = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  public vote(photo: string) {
    if (photo != 'a' && photo != 'b') {
      throw new Error("Unknown photo parameter.");
    }

    this.votedForPhoto.emit(photo);
  }
}
