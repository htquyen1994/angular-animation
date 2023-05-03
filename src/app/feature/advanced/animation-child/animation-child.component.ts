import { trigger, transition, style, animate, query, animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const FADELEFT = [
  trigger('fadeLeftHide', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateX(-200px)'}),
      animate('500ms ease-in', style({opacity: 1, transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      animate('500ms ease-in', style({opacity: 0, transform: 'translateX(-200px)'}))
    ])
  ])
]

const FADELEFT_ANIMATION_CHILD = [
  trigger('fadeLeftHideAnimationChild', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateX(-200px)'}),
      animate('500ms ease-in', style({opacity: 1, transform: 'translateX(0)'}))
    ]),
    transition(':leave', [
      animate('500ms ease-in', style({opacity: 0, transform: 'translateX(-200px)'}))
    ])
  ])
]

const CONTAINER = [
  trigger('container', [
    transition(':enter, :leave', [
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
];

@Component({
  selector: 'app-animation-child',
  templateUrl: './animation-child.component.html',
  styleUrls: ['./animation-child.component.scss'],
  animations: [
    FADELEFT,
    FADELEFT_ANIMATION_CHILD,
    CONTAINER
  ]
})
export class AnimationChildComponent implements OnInit {

  isOpenChildOne = false;
  isOpenChildTwo = false;
  constructor() { }

  ngOnInit(): void {
  }


  showHide1() {

  }

  showHide2() {

  }
}
