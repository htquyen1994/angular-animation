import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-demo',
  templateUrl: './basic-demo.component.html',
  styleUrls: ['./basic-demo.component.scss'],
  animations: [
    trigger('openClosed', [
      state('open', style({opacity: 0, transform: 'scale(0.7)'})),
      state('close', style({opacity: 1, transform: 'scale(1)'})),
      transition('open => close', [animate('500ms ease-in')]),
      transition('close => open', [animate('500ms ease-in')])
    ])
  ]
})
export class BasicDemoComponent implements OnInit {
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

}
