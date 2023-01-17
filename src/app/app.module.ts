import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {BodyComponent} from "./body/body.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ToastrModule} from "ngx-toastr";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppServiceService} from "./services/app-service.service";
import {WebsocketService} from "./services/websocket.service";


import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import { RapportsModule } from './rapports/rapports.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatBottomSheetModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    HttpClientModule,
    RapportsModule,

  ],
  providers: [AppServiceService,WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
