import { animate, query, sequence, state, style, transition, trigger, group, stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const animationFadeGrowGroup = [
  trigger('fadeGroup', [
    transition(':enter', [
      style({opacity: 0, transform: 'scale(0.8)'}),
      group([
        animate('3000ms ease-in', style({opacity: 1})),
        animate('300ms', style({transform: 'scale(1)'})),
      ])
    ]),
    transition(':leave', [
      sequence([
        animate('3000ms ease-in', style({ opacity: 0.5})),
        animate('500ms', style({ transform: 'scale(0.8)' })),
      ])
    ]),
  ])
]
const animationFadeSequence = [
  trigger('fadeSequence', [
    transition(':enter', [
      style({opacity: 0, transform: 'scale(0.8)'}),
      sequence([
        animate('3000ms ease-in', style({opacity: 1})),
        animate('300ms', style({transform: 'scale(1)'})),
      ])
    ]),
    transition(':leave', [
      sequence([
        animate('3000ms ease-in', style({ opacity: 0.5})),
        animate('300ms', style({ transform: 'scale(0.8)' })),
      ])
    ]),
  ])
]

const animationFadeGrowStagger = [
  trigger('fadeStagger', [
    transition(':enter', [
      query(':enter', [
        style({opacity: 0, transform: 'scale(0.8)'}),
        stagger('500ms', [
          animate('50ms ease-in', style({opacity: 1, transform: 'scale(1)'}))
        ])
      ])
    ]),
    transition(':leave', [
      query(':leave', [
        stagger('-500ms', [
          animate('50ms ease-in', style({opacity: 0, transform: 'scale(0.8)'}))
        ])
      ])
    ])
  ])
]


// const animationFadeGrowGroupTest = [
//   trigger('fadeGroup', [
//     transition(':enter', [
//       query(':enter', [
//         style({opacity: 0, transform: 'scale(0.8)'}),
//         sequence([
//           animate('300ms ease-in', style({opacity: 1})),
//           animate('300ms', style({transform: 'scale(1)'})),
//         ])
//       ])
//     ]),
//     transition(':leave', [
//       query(':leave', [
//         sequence([
//           animate('3000ms ease-in', style({ opacity: 0.6, backgroundColor: 'red' })),
//           animate('300ms', style({ transform: 'scale(0.8)' })),
//         ])
//       ])
//     ]),
//   ])
// ]

enum SEQUENCE {
  GROUP = 'group',
  SEQUENCE = 'sequence',
  STAGGER = 'stagger'
}

@Component({
  selector: 'app-demo-sequence',
  templateUrl: './demo-sequence.component.html',
  styleUrls: ['./demo-sequence.component.scss'],
  animations: [animationFadeGrowGroup, animationFadeSequence, animationFadeGrowStagger]
})
export class DemoSequenceComponent implements OnInit {

  SEQUENCE = SEQUENCE;
  typeSequence = SEQUENCE.SEQUENCE;
  typeSequenceQueue = SEQUENCE.SEQUENCE;

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
