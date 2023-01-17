import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FooterComponent} from "./footer/footer.component";

const routes: Routes = [

  { path: 'test',
    component:FooterComponent
  },
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapportsRoutingModule { }
