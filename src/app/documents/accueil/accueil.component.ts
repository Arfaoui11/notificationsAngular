import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from "../../services/websocket.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit,OnDestroy {


  constructor(private websocketService: WebsocketService)
  {

  }
  ngOnInit(): void {
    this.websocketService.initaliseSubs();
  }
  ngOnDestroy() {
    // this.websocketService.destroySession();

  }

}
