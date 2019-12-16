import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';

const COMPONENTS = [BookmarkCardComponent];

const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES],
  imports: [...MODULES]
})
export class SharedModule {}
