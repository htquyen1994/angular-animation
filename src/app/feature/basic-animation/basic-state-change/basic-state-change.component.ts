import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


export const ShowHideAnimation = [
  trigger('showHide', [
    // state('in', style({ transform: 'translateX(0)' })),
    transition("void => *", [
      style({transform: 'translateX(-200px)'}),
      animate('300ms ease-out', style({transform: 'translateX(0)', opacity: 1}))
    ]),
    transition("* => void", [
      animate('300ms ease-out', style({transform: 'translateX(-200px)', opacity: 0}))
    ])
  ]),
];

export const ShowHideAnimation1 = [
  trigger('showHide', [
    // state('in', style({ transform: 'translateX(0)' })),
    transition(":enter", [
      style({transform: 'translateX(-200px)', opacity: 0}),
      animate('300ms ease-out', style({transform: 'translateX(0)', opacity: 1}))
    ]),
    transition(":leave", [
      animate('300ms ease-out', style({transform: 'translateX(-200px)', opacity: 0}))
    ])
  ]),
];

export const ZoomInOutAnimation = [
  trigger('zoomInOut', [
    state('zoomIn', style({transform: 'scale(0.8)'})),
    state('zoomOut', style({transform: 'scale(1)'})),
    transition('* => *', [animate('500ms ease-in')])
  ]),
];

@Component({
  selector: 'app-basic-state-change',
  templateUrl: './basic-state-change.component.html',
  styleUrls: ['./basic-state-change.component.scss'],
  animations: [
    ShowHideAnimation,
    ZoomInOutAnimation
  ]
})
export class BasicStateChangeComponent implements OnInit {

  isZoom = false;
  isShow = false;
  constructor() { }

  ngOnInit(): void {
  }

}
