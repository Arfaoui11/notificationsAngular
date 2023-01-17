import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportsRoutingModule } from './rapports-routing.module';
import {FooterComponent} from "./footer/footer.component";
import {DocumentsModule} from "../documents/documents.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RapportsRoutingModule,
    DocumentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DocumentsModule
  ]
})
export class RapportsModule { }
