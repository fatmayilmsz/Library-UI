import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAuthorComponent } from './category-author.component';

describe('CategoryAuthorComponent', () => {
  let component: CategoryAuthorComponent;
  let fixture: ComponentFixture<CategoryAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CategoryAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
