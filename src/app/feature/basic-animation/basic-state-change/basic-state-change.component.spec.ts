import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStateChangeComponent } from './basic-state-change.component';

describe('BasicStateChangeComponent', () => {
  let component: BasicStateChangeComponent;
  let fixture: ComponentFixture<BasicStateChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicStateChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicStateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
