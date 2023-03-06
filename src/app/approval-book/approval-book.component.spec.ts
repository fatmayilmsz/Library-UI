import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalBookComponent } from './approval-book.component';

describe('ApprovalBookComponent', () => {
  let component: ApprovalBookComponent;
  let fixture: ComponentFixture<ApprovalBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
