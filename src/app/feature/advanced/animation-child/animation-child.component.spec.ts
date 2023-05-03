import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationChildComponent } from './animation-child.component';

describe('AnimationChildComponent', () => {
  let component: AnimationChildComponent;
  let fixture: ComponentFixture<AnimationChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
