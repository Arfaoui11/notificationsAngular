import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {NotifCountComponent} from "../notif-count/notif-count.component";
import {WebsocketService} from "../../services/websocket.service";

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent {
  actions: any;

  constructor(private bottomSheetRef: MatBottomSheetRef<NotifCountComponent>,private websocketService: WebsocketService,@Inject(MAT_BOTTOM_SHEET_DATA) public data: {}) {
    this.actions = data;
    console.log(data)
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }



  deleteNotif(id:number)
  {
    this.websocketService.deletenotification(id);
   // this.actions = this.actions.filter(tq => tq.idNotification != id);
  }
}
