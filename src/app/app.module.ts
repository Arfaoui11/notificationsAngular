import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AccueilComponent} from "./accueil/accueil.component";
import {WhoareweComponent} from "./whoarewe/whoarewe.component";
import {BodyComponent} from "./body/body.component";
import {NotificationsComponent} from "./webSocket/notifications/notifications.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ToastrModule} from "ngx-toastr";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppServiceService} from "./services/app-service.service";
import {WebsocketService} from "./services/websocket.service";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    WhoareweComponent,
    BodyComponent,
    NotificationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSidenavModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    HttpClientModule
  ],
  providers: [AppServiceService,WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
