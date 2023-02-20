import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookauthorComponent } from './bookauthor.component';

describe('BookauthorComponent', () => {
  let component: BookauthorComponent;
  let fixture: ComponentFixture<BookauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookauthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
