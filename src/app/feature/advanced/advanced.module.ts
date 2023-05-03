import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { DemoSequenceComponent } from './demo-sequence/demo-sequence.component';
import { SequenceComponent } from './sequence/sequence.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { TargetElementComponent } from './target-element/target-element.component';
import { AnimationChildComponent } from './animation-child/animation-child.component';
import { AnimationDisabledComponent } from './animation-disabled/animation-disabled.component';


@NgModule({
  declarations: [
    DemoSequenceComponent,
    SequenceComponent,
    KeyframesComponent,
    TargetElementComponent,
    AnimationChildComponent,
    AnimationDisabledComponent,
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModule,
    ShareModule
  ]
})
export class AdvancedModule { }
