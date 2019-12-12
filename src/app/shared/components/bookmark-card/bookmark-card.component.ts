import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookmark-card',
  templateUrl: './bookmark-card.component.html',
  styleUrls: ['./bookmark-card.component.scss']
})
export class BookmarkCardComponent implements OnInit {

  @Input() name;
  @Input() url;
  @Output() forRemove = new EventEmitter();
  constructor() { }

  removeBookmark() {
    this.forRemove.emit();
  }
  ngOnInit() {
  }

}
