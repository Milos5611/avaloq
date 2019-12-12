import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { Bookmark } from './inerfaces/bookmark.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Avaloq - Bookmark app';
  ngOnInit() {
  }
}
