import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  static readonly characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  @Input() title!: string;
  description = 'Demo card! Hello world';
  constructor() {
    // this.description = this.getDescription();
    // this.title = this.getTitle();
  }

  ngOnInit(): void {

  }

  getTitle() {
    return this._generateString(10);
  }

  getDescription() {
    return this._generateString(50);
  }

  private _generateString(length: number) {
    let result = ' ';
    const charactersLength = CardComponent.characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += CardComponent.characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }


}
