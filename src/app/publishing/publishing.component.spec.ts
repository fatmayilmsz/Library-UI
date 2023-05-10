import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingComponent } from './publishing.component';

describe('PublishingComponent', () => {
  let component: PublishingComponent;
  let fixture: ComponentFixture<PublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PublishingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
