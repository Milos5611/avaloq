import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkCardComponent } from './bookmark-card.component';

describe('BookmarkCardComponent', () => {
  let component: BookmarkCardComponent;
  let fixture: ComponentFixture<BookmarkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
