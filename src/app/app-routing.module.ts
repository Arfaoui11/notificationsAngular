import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import {NotificationsComponent} from "./webSocket/notifications/notifications.component";



const routes: Routes =

  [
    { path: 'whoarewe', component: WhoareweComponent },
    { path: 'home', component: BodyComponent },
    { path: 'notif', component: NotificationsComponent },
    { path: '',  redirectTo: '/home', pathMatch: 'full' },

  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
