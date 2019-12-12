import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBookmarkRoutingModule } from './add-bookmark-routing.module';
import { AddBookmarkComponent } from './pages/add-bookmark/add-bookmark.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AddBookmarkComponent],
  imports: [
    CommonModule,
    SharedModule,
    AddBookmarkRoutingModule
  ]
})
export class AddBookmarkModule { }
