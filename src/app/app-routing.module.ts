import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [


  {
    path: 'back_office',
    loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path: 'rapport',
    loadChildren: () => import('./rapports/rapports.module').then(m => m.RapportsModule)
  },


  {
    path: '',
    redirectTo: 'back_office',
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: ''
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
