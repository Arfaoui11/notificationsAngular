import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsRoutingModule } from './notifications-routing.module';
import {NotificationsComponent} from "./notif/notifications.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {DocumentsModule} from "../documents/documents.module";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";


@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DocumentsModule,
  ]
})
export class NotificationsModule { }
