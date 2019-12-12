import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bookmark } from 'src/app/inerfaces/bookmark.interface';
import { AppState } from 'src/app/app.state';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import * as BookmarkActions from '../../../../actions/bookmarks.actions';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  bookmarks: Bookmark[];
  groups;

  constructor(private store: Store<AppState>, private router: Router, private toastService: ToastService) { }

  /**
   *  @description Navigate to Add Bookmarks page
   */
  addBookmark() {
    this.router.navigate(['add']);
  }

  /**
   * @description Remove Bookmark on click
   * @param bookmark - Bookmark
   */
  removeBookmark(bookmark: Bookmark) {
    this.store.dispatch(new BookmarkActions.DeleteBookmark(bookmark));
    this.toastService.error(`Bookmark successfuly deleted`);
  }


  ngOnInit() {
    this.store.
      pipe(select('bookmark'), takeUntil(this.destroy$))
      .subscribe((booksmarks: Bookmark[]) => {
        this.groups = this.groupBy(booksmarks, 'group');
        this.bookmarks = booksmarks;
      });
  }

  /**
   * @description Helper function for grouping objects by group property
   * @param objectArray Bookmars Array
   * @param property String
   */
  groupBy(objectArray: Bookmark[], property: string) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

}
