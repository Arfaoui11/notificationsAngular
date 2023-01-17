import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportsRoutingModule } from './rapports-routing.module';
import {FooterComponent} from "./footer/footer.component";


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RapportsRoutingModule
  ]
})
export class RapportsModule { }
