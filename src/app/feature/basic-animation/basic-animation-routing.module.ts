import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { BasicStateChangeComponent } from './basic-state-change/basic-state-change.component';

const routes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'state-change', component: BasicStateChangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicAnimationRoutingModule { }
