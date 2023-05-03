import { Component, OnInit } from '@angular/core';
import { animate, query, sequence, state, style, transition, trigger, group, stagger } from '@angular/animations';

enum SEQUENCE {
  GROUP = 'group',
  SEQUENCE = 'sequence',
  STAGGER = 'stagger'
}


const animationFadeGrowStagger = [
  trigger('fadeStagger', [
    transition(':enter', [
      query(':enter', [
        style({opacity: 0, transform: 'scale(0.8)'}),
        stagger('500ms', [
          animate('50ms ease-in', style({opacity: 1, transform: 'scale(1)'}))
        ])
      ], {limit: 3})
    ]),
    transition(':leave', [
      query(':leave', [
        stagger('500ms', [
          animate('50ms ease-in', style({opacity: 0, transform: 'scale(0.8)'}))
        ])
      ], {limit: 3})
    ])
  ])
]

@Component({
  selector: 'app-target-element',
  templateUrl: './target-element.component.html',
  styleUrls: ['./target-element.component.scss'],
  animations: [animationFadeGrowStagger]
})
export class TargetElementComponent implements OnInit {
  SEQUENCE = SEQUENCE;
  typeSequence = SEQUENCE.STAGGER;
  typeSequenceQueue = SEQUENCE.STAGGER;
  constructor() { }

  ngOnInit(): void {
  }

  selectedSequence(type: SEQUENCE) {
    this.typeSequence = null;
    this.typeSequenceQueue = type;
  }

  animationDone() {
    this.typeSequence = this.typeSequenceQueue;
  }
}
