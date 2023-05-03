import { trigger, transition, query, style, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

// const KEYFRAMES = [
//   trigger('keyframe', [
//     transition(':enter', [
//       query('app-card', [
//         style({opacity: 0.5, transform: 'scale(0.2)'}),
//         animate('1000ms ease-in', keyframes([
//           style({opacity: 0.7, transform: 'scale(0.4)', backgroundColor: 'green'}),
//           style({opacity: 0.8, transform: 'scale(0.6)', backgroundColor: 'yellow'}),
//           style({opacity: 0.9, transform: 'scale(0.8)', backgroundColor: 'aqua'}),
//           style({opacity: 1, transform: 'scale(1)', backgroundColor: 'antiquewhite'}),
//         ]))
//       ])
//     ])
//   ])
// ]

const KEYFRAMES = [
  trigger('keyframe', [
    transition(':enter', [
      style({opacity: 0.5, transform: 'scale(0.2)'}),
        animate('1000ms ease-in', keyframes([
          style({opacity: 0.7, transform: 'scale(0.4)', backgroundColor: 'green'}),
          style({opacity: 0.8, transform: 'scale(0.6)', backgroundColor: 'yellow'}),
          style({opacity: 0.9, transform: 'scale(0.8)', backgroundColor: 'aqua'}),
          style({opacity: 1, transform: 'scale(1)', backgroundColor: 'antiquewhite'}),
        ]))
    ])
  ])
]

@Component({
  selector: 'app-keyframes',
  templateUrl: './keyframes.component.html',
  styleUrls: ['./keyframes.component.scss'],
  animations: [
    KEYFRAMES
  ]
})
export class KeyframesComponent implements OnInit {
  cardIsDisplayed = false
  constructor() { }

  ngOnInit(): void {
  }

}
