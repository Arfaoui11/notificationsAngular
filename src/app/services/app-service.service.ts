import { Injectable } from '@angular/core';
import {XhrhandlerService} from "./xhrhandler.service";
import {Observable} from "rxjs";
import {Notification} from "../model/Notification";
import * as path from "path";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  constructor(private xhrhandler: XhrhandlerService) { }

  userLogin(request: Notification): Observable<any> {
    return this.xhrhandler.doPost('notif/save', request);
  }

  listUser(): Observable<any> {
    return this.xhrhandler.doGet('notif/list');
  }

  deleteNotification(id : number): Observable<any>
  {
   return  this.xhrhandler.doDelete('notif/',id);
  }

}
