import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {WebsocketService} from "../../services/websocket.service";
import {Message} from "../../model/Message";

import {AppServiceService} from "../../services/app-service.service";
import {BottomSheetComponent} from "../bottom-sheet/bottom-sheet.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
  @ViewChild('drawer') drawer:any;
  websocket: WebSocket;
  notifications: any;
  constructor(private responsive: BreakpointObserver,private websocketService: WebsocketService,private bottomSheet: MatBottomSheet,private appService: AppServiceService){

    this.websocket = this.websocketService.createNew();


    this.startListening2();

  }



  hideSideMenu = true;
  ngOnInit(): void {
    this.startListening();
    this.getlistNotification();

  }

  ngOnDestroy() {
    this.websocket.close()
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

  ngAfterViewInit(): void {
  this.responsive.observe([
      Breakpoints.Large
      ])
      .subscribe(result => {
        this.hideSideMenu = true;

        if (result.matches) {
          this.drawer.open();

          this.hideSideMenu = false;
        }

  });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent,{
      data: this.notifications

    });
  }

  logout(): void {
  //  this.loginService.signOut();

  }



}
