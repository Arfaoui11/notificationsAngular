import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const SERVER_BASE_URL = "http://localhost:8099/";

@Injectable({
  providedIn: 'root'
})
export class XhrhandlerService {
  constructor(private httpClient: HttpClient) { }

  doGet(path : string) {
    return this.httpClient.get(SERVER_BASE_URL + path);
  }
  doDelete(path : string , id : number)
  {
    return  this.httpClient.delete(SERVER_BASE_URL+ path + id);
  }

  doPost(path : string, reqData : any) {
    return this.httpClient.post(SERVER_BASE_URL + path, JSON.stringify(reqData), {headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }});
  }
}
