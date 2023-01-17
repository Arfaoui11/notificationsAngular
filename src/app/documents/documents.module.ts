import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WhoareweComponent} from "./whoarewe/whoarewe.component";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import { NotifCountComponent } from './notif-count/notif-count.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import {AccueilComponent} from "./accueil/accueil.component";


@NgModule({
  declarations: [
    DashboardComponent,
    WhoareweComponent,
    NotifCountComponent,
    BottomSheetComponent,
    AccueilComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatBottomSheetModule,

  ]
})
export class DocumentsModule { }
