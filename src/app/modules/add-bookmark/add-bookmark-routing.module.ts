import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookmarkComponent } from './pages/add-bookmark/add-bookmark.component';


const routes: Routes = [
  { path: '', component: AddBookmarkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBookmarkRoutingModule { }
