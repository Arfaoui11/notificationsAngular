import {Component, HostListener, OnInit} from '@angular/core';
import {WebsocketService} from "../../services/websocket.service";
import {Message} from "../../model/Message";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastrService} from "ngx-toastr";
import {AppServiceService} from "../../services/app-service.service";
import {Notification} from "../../model/Notification";




@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  message: string = '';
  publishedMessage: Message[] = [];
  showTypingIndicator: boolean = false;
  typingUser: string;
  loggedinUserId: number;
  websocket: WebSocket;
  currentUser: any = [];

  heurs : Date = new Date();
  daysa : Date = new Date();
   publishedNotifications: Message[] = [];

  constructor(private websocketService: WebsocketService,private snackbar:MatSnackBar,private appService: AppServiceService,private toastrService: ToastrService) {


    this.websocket = this.websocketService.createNew();

    this.websocket.onopen = (event) => {
      let message: Message = {
        type: 'JOINED',
        from: 1,
        fromUserName: 'mahdi',
        message: ''
      };
      this.websocket.send(JSON.stringify(message));
    };

    this.startListening2();
    this.startListening();

  }



  ngOnInit(): void {

    this.startListening();
  }



  startListening() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'MESSAGE') {
        this.publishedMessage.push(message);
      }else if (message.type == 'TYPING')
      {
        if (message.from != this.loggedinUserId) {
          this.showUserTypingIndicator(message.fromUserName);
        }
      }
    };
  }

  sendMessage() {
    let msg = this.message;
    if (msg == '' || msg == undefined) return;

    let message: Message = {
      type: 'MESSAGE',
      from: 1,
      fromUserName: 'mahdi',
      message: msg
    };
    this.websocketService.sendMessage(message);

    this.message = '';
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

  showUserTypingIndicator(userName: string) {
    this.typingUser = userName;

    this.showTypingIndicator = true;
    setTimeout(() => {
      this.hideUserTypingIndicator();
    }, 2000);
  }

  hideUserTypingIndicator() {
    if (this.showTypingIndicator) {
      this.showTypingIndicator = false;
    }
  }




  startListening2() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'JOINED') {
        console.log(message.type);
        this.setUserStatus(message.from, true);
      } else if (message.type == 'LEFT') {
        this.setUserStatus(message.from, false);
      }
    }
  }





  setUserStatus(userId: Number, isOnline: boolean) {
    // let user: User[] = this.users.filter(u => u.id == userId );
    // user[0].isOnline = isOnline;
    // this.users = user;
    // console.log(user);

   /* for (let u of this.notifications)
    {
      if (u.id == userId)
      {
        u.isOnline = true;
      }
    }*/


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


  private showNotifications(message: Message) {
    this.websocketService.showNotifications(message);
  }


}
