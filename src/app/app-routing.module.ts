import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';
import {NotificationsComponent} from "./webSocket/notifications/notifications.component";



const routes: Routes =

  [

    { path: '',  redirectTo: '/front/notif', pathMatch: 'full' },
    {
      path: 'front',
      component: BodyComponent,
      children: [
        { path: 'notif',  component: NotificationsComponent },
        { path: 'whoarewe', component: WhoareweComponent },
      ]
    },
  ];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
