import {Component, HostListener, OnInit} from '@angular/core';
import {Message} from "../model/Message";
import {WebsocketService} from "../services/websocket.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppServiceService} from "../services/app-service.service";
import {ToastrService} from "ngx-toastr";
import {Notification} from "../model/Notification";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  showFiller = false;
  websocket: WebSocket;
  notifications: Notification[] = [];

  constructor(private websocketService: WebsocketService,private snackbar:MatSnackBar,private appService: AppServiceService,private toastrService: ToastrService) {

    this.websocket = this.websocketService.createNew();



    this.startListening2();

  }



  ngOnInit(): void {
    this.getlistNotification();
    this.startListening();
    //this.websocketService.initaliseSubs();
   // this.updateNotification(this.websocketService.getList().content)
  }


  startListening2() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'JOINED') {
        console.log(message.type);
      //  this.setUserStatus(message.from, true);
      } else if (message.type == 'LEFT') {
        //this.setUserStatus(message.from, false);
      }
    }
  }
  startListening() {
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      if (message.type == 'MESSAGE') {
        // this.publishedMessage.push(message);
        console.log("notifications send ")
      } else if (message.type == 'NOTIFICATIONS') {
        console.log("notifications send ")
        this.updateNotification(message.message)
      }
    };
  }

  updateNotification(msg : string)
  {
    let notif: any = {
      content : msg,
      createAt: new Date()
    }
    this.notifications.push(notif);
  }

  deleteNotif(id:number)
  {
    this.websocketService.deletenotification(id);
    this.notifications = this.notifications.filter(t => t.idNotification != id);
  }

  getlistNotification()
  {
    this.appService.listUser().subscribe(response => {

      this.notifications = response.sort((a: any, b: any) =>
        new Date(a.createAt).getTime() - new Date(b.createAt).getTime()
      ).reverse();


    });
  return this.notifications;
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
