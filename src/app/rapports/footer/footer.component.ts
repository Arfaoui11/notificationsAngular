import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {WebsocketService} from "../../services/websocket.service";
import {Message} from "../../model/Message";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,OnDestroy {
  websocket: WebSocket;
  message: string = '';
  constructor(private websocketService: WebsocketService) {

    this.websocket = this.websocketService.createNew();

  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.websocket.close();
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

  @HostListener('window:beforeunload')
  close() {
    let message: Message = {
      type: 'LEFT',
      from: 1,
      fromUserName: 'mahdi',
      message: ""
    }
    this.websocket.send(JSON.stringify(message));
  }

}
