import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderPictureComponent } from './slider-picture.component';

describe('SliderPictureComponent', () => {
  let component: SliderPictureComponent;
  let fixture: ComponentFixture<SliderPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
