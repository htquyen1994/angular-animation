import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { SequenceComponent } from './sequence/sequence.component';
import { TargetElementComponent } from './target-element/target-element.component';
import { AnimationChildComponent } from './animation-child/animation-child.component';
import { AnimationDisabledComponent } from './animation-disabled/animation-disabled.component';

const routes: Routes = [
  {path: 'squence', component: SequenceComponent},
  {path: 'keyframes', component: KeyframesComponent},
  {path: 'target-element', component: TargetElementComponent},
  {path: 'animation-child', component: AnimationChildComponent},
  {path: 'disabled', component: AnimationDisabledComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }
