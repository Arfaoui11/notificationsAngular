import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




/*const routes: Routes =

  [

    { path: '',  redirectTo: '/front/end/notif', pathMatch: 'full' },
    {
      path: 'front',
      component: AccueilComponent,
      children: [
        {
        path: 'end',
        component: BodyComponent,
        children: [
          { path: 'notif',  component: NotificationsComponent },
        { path: 'whoarewe', component: WhoareweComponent },
        { path: 'accueil', component: AccueilComponent },
       ],
        }


      ]
    },
  ];*/

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
