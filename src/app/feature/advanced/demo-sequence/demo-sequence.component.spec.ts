import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSequenceComponent } from './demo-sequence.component';

describe('DemoSequenceComponent', () => {
  let component: DemoSequenceComponent;
  let fixture: ComponentFixture<DemoSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSequenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
