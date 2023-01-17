import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { MatBottomSheet} from "@angular/material/bottom-sheet";
import {BottomSheetComponent} from "../bottom-sheet/bottom-sheet.component";
import {Notification} from "../../model/Notification";
import {WebsocketService} from "../../services/websocket.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppServiceService} from "../../services/app-service.service";
import {ToastrService} from "ngx-toastr";
import {Message} from "../../model/Message";

@Component({
  selector: 'app-notif-count',
  templateUrl: './notif-count.component.html',
  styleUrls: ['./notif-count.component.css']
})
export class NotifCountComponent implements OnInit,OnDestroy {

  websocket: WebSocket;
  notifications: any;


  constructor(private bottomSheet: MatBottomSheet,private websocketService: WebsocketService,private snackbar:MatSnackBar,private appService: AppServiceService) {
    this.websocket = this.websocketService.createNew();


    this.startListening2();
  }

  ngOnInit(): void {
    this.getlistNotification();
    this.startListening();
  }
  ngOnDestroy() {
    this.websocket.close();
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
        console.log("notif send ")
      } else if (message.type == 'NOTIFICATIONS') {
        console.log("notif update")
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
   // this.notifications = this.notifications.filter(t => t.idNotification != id);
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
  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent,{
      data: this.notifications

    });
  }
}
