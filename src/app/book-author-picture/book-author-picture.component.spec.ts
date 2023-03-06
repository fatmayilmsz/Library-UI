import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAuthorPictureComponent } from './book-author-picture.component';

describe('BookAuthorPictureComponent', () => {
  let component: BookAuthorPictureComponent;
  let fixture: ComponentFixture<BookAuthorPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAuthorPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAuthorPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
