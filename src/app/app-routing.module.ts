import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RectiveformComponent } from './rectiveform/rectiveform.component';
import { TempleteformComponent } from './templeteform/templeteform.component';

const routes: Routes = [
  {
    path:'templeteform',
    component: TempleteformComponent
  },
  {
    path:'rectiveform',
    component: RectiveformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
