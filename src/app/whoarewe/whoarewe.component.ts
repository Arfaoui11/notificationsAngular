import { Component, OnInit } from '@angular/core';
import {WebsocketService} from "../services/websocket.service";
import {Message} from "../model/Message";

@Component({
  selector: 'app-whoarewe',
  templateUrl: './whoarewe.component.html',
  styleUrls: ['./whoarewe.component.css']
})
export class WhoareweComponent implements OnInit {
  websocket: WebSocket;
  message: string = '';
  constructor(private websocketService: WebsocketService) {

    this.websocket = this.websocketService.createNew();

  }

  ngOnInit(): void {

  }

  sendNotificaion() {
    let msg = this.message;
    if (msg == '' || msg == undefined) return;
    let message: Message = {
      type: 'NOTIFICATIONS',
      from: 2,
      fromUserName: 'arfaoui new',
      message: msg
    };
    this.websocket.send(JSON.stringify(message));
  }

}
