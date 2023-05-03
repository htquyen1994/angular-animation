import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDisabledComponent } from './animation-disabled.component';

describe('AnimationDisabledComponent', () => {
  let component: AnimationDisabledComponent;
  let fixture: ComponentFixture<AnimationDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
