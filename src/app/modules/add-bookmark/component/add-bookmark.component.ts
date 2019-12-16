import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as bookmarkActions from '../../../actions/bookmarks.actions';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
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
    private router: Router
  ) {}

  ngOnInit() {
    this.bookmarkForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      url: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?%#[\]@!\$&'\(\)\*\+,;=.]+$/gm
        )
      ]),
      group: new FormControl('', Validators.required)
    });
  }

  onSubmitNewBookmark() {
    const { name, url, group } = this.bookmarkForm.value;
    this.store.dispatch(bookmarkActions.actionAddBookmark(name, url, group));
    this.toastService.success(`New Bookmark successfuly created.`);
    this.router.navigate(['']);
  }
}
