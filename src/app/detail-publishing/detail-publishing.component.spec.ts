import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPublishingComponent } from './detail-publishing.component';

describe('DetailPublishingComponent', () => {
  let component: DetailPublishingComponent;
  let fixture: ComponentFixture<DetailPublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DetailPublishingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
