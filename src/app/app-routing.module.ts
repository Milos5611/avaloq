import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-bookmark',
    loadChildren: () =>
      import('./modules/add-bookmark/add-bookmark.module').then(
        m => m.AddBookmarkModule
      )
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
