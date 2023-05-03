import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicAnimationRoutingModule } from './basic-animation-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { Route, Router } from '@angular/router';
import { BasicDemoComponent } from './basic-demo/basic-demo.component';
import { BasicStateChangeComponent } from './basic-state-change/basic-state-change.component';



@NgModule({
  declarations: [
    OverviewComponent,
    BasicDemoComponent,
    BasicStateChangeComponent
  ],
  imports: [
    CommonModule,
    BasicAnimationRoutingModule
  ]
})
export class BasicAnimationModule { }
