import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './reducers/bookmark.reducer';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

const COMPONENTS = [AppComponent];

const MODULES = [
  BrowserModule,
  CommonModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  SharedModule,
  AngularToastifyModule,
  StoreModule.forRoot({
    bookmark: bookmarkReducer
  })
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
