import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../../services/websocket.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  constructor(private websocketService: WebsocketService)
  {

  }
  ngOnInit(): void {
    this.websocketService.initaliseSubs();
  }

}
