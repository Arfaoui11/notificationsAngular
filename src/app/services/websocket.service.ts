import {Injectable, OnInit} from '@angular/core';
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

  constructor(private snackbar:MatSnackBar,private appService: AppServiceService,private toastrService: ToastrService) {
    this.websocket = this.createNew();

   // this.initaliseSubs();
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
    this.message = '';

  }

  startListening() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'MESSAGE') {
        console.log("MESSAGE send ")
        this.showInfo(message.message,message.type);
      } else if (message.type == 'NOTIFICATIONS') {

          console.log("NOTIFICATIONS send ")
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

    });
    this.showSuccess(message.message,message.type);

  }

  deletenotification(idNotification: any) {
    this.appService.deleteNotification(idNotification).subscribe(data => {
    })
  }

  hideUserTypingIndicator() {
    if (this.showTypingIndicator) {
      this.showTypingIndicator = false;
    }
  }



}
