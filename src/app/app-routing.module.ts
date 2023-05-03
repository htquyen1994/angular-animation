import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'basic', loadChildren: () => import('./feature/basic-animation/basic-animation.module').then(m => m.BasicAnimationModule)},
  {path: 'advanced', loadChildren: () => import('./feature/advanced/advanced.module').then(m => m.AdvancedModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
