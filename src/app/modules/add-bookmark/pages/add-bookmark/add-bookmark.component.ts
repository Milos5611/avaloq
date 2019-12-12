import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as BookmarkActions from '../../../../actions/bookmarks.actions';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {

  bookmarkForm: FormGroup;

  constructor(
    private toastService: ToastService,
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router) { }

  get name(): FormControl {
    return this.bookmarkForm.get('name') as FormControl;
  }

  get url(): FormControl {
    return this.bookmarkForm.get('url') as FormControl;
  }

  get group(): FormControl {
    return this.bookmarkForm.get('group') as FormControl;
  }

  addTutorial(name: string, url: string, group: string) {
    this.store.dispatch(new BookmarkActions.AddBookmark({ name, url, group }));
    this.router.navigate(['']);

  }

  ngOnInit() {
    this.bookmarkForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      // tslint:disable-next-line:max-line-length
      url: new FormControl('', [Validators.required, Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?%#[\]@!\$&'\(\)\*\+,;=.]+$/gm)]),
      group: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const { name, url, group } = this.bookmarkForm.value;
    this.store.dispatch(new BookmarkActions.AddBookmark({ name, url, group }));
    this.toastService.success(`New Bookmark successfuly created.`);
    this.router.navigate(['']);

  }

}
