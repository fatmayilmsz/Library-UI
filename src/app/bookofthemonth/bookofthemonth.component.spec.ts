import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookofthemonthComponent } from './bookofthemonth.component';

describe('BookofthemonthComponent', () => {
  let component: BookofthemonthComponent;
  let fixture: ComponentFixture<BookofthemonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookofthemonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookofthemonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
