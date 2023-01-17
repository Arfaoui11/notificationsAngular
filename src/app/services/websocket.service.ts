import {HostListener, Injectable, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppServiceService} from "./app-service.service";
import {ToastrService} from "ngx-toastr";
import {Message} from "../model/Message";
import {Notification} from "../model/Notification";
const WEBSOCKET_URL = 'ws://localhost:8099/websocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService  {


  notifications: Notification[] = [];
  message: string = '';
  publishedMessage: Message[] = [];
  showTypingIndicator: boolean = false;
  typingUser: string;
  loggedinUserId: number;
  websocket: WebSocket;
  currentUser: any = [];
  public notif: Notification;

  constructor(private snackbar:MatSnackBar,private appService: AppServiceService,private toastrService: ToastrService) {
    this.websocket = this.createNew();

    this.startListening2();
  }
  initaliseSubs(){
    this.startListening();
  }


  createNew(): WebSocket {
    this.websocket = new WebSocket(WEBSOCKET_URL);
    return this.websocket;
  }
  public showSuccess(message: string, type : string): void {
    this.toastrService.success(message, type);
  }

  public showInfo(message: string, type : string): void {
    this.toastrService.info(message, type);
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }

  sendMessage(mess : Message) {
    this.websocket.send(JSON.stringify(mess));

  }

  startListening() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'MESSAGE') {
        console.log("MESSAGE send ");
        this.publishedMessage.push(message);
        this.showInfo(message.message,message.type);
      } else if (message.type == 'NOTIFICATIONS') {
          console.log("NOTIFICATIONS send 2")
          this.showNotifications(message);

      }
    };
  }

  startListening2() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'JOINED') {
        console.log(message.type);
        //this.setUserStatus(message.from, true);
      } else if (message.type == 'LEFT') {
        //this.setUserStatus(message.from, false);
      }
    }
  }

  public showNotifications(message: Message) {
    let notif: any = {
      content : message.message,
      createAt: new Date()
    }
    this.appService.userLogin(notif).subscribe(data => {
    this.notifications.push(data);
    });
    this.showSuccess(message.message,message.type);
   // this.sendupdate(notif);
  }

  deletenotification(idNotification: any) {
    this.appService.deleteNotification(idNotification).subscribe(data => {
    })
  }

  sendTypeIndicator() {
    let message: Message = {
      type: 'TYPING',
      from: 2,
      fromUserName: 'arfaoui new',
      message: 'asd'
    };
    this.websocket.send(JSON.stringify(message));
  }

  hideUserTypingIndicator() {
    if (this.showTypingIndicator) {
      this.showTypingIndicator = false;
    }
  }

  destroySession()
  {
    this.websocket.close();
  }
  @HostListener('window:unload')
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
