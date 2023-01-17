import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WhoareweComponent} from "./whoarewe/whoarewe.component";
import {NotifCountComponent} from "./notif-count/notif-count.component";
import {BottomSheetComponent} from "./bottom-sheet/bottom-sheet.component";
import {AccueilComponent} from "./accueil/accueil.component";

const routes: Routes = [



  {
    path: 'dashboard',
    component: AccueilComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: 'whoarewe', component: WhoareweComponent },
        ],
      }
    ]
  },
  {
    path: 'countnotif',
    component:NotifCountComponent/*,
     canActivate : [AuthGuard]*/
  } ,
  {
    path: 'listnotification',
    component:BottomSheetComponent/*,
     canActivate : [AuthGuard]*/
  } ,
  {
    path: '',
    redirectTo: 'dashboard/whoarewe',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
