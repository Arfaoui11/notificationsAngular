import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./services/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WebSocker';

  showFiller = false;
  constructor(private websocketService: WebsocketService)
  {

  }
  ngOnInit(): void {
    this.websocketService.initaliseSubs();
  }

}
