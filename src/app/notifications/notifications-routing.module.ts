import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../documents/dashboard/dashboard.component";
import {WhoareweComponent} from "../documents/whoarewe/whoarewe.component";
import {NotificationsComponent} from "./notif/notifications.component";

const routes: Routes = [

  { path: 'chat',
    component:NotificationsComponent/*,
     canActivate : [AuthGuard]*/
  },
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
