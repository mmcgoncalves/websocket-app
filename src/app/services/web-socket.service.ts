/*import { SockJS } from 'sockjs-client';
import * as  Stomp from '@stomp/stompjs';*/
import { Injectable } from '@angular/core';
import * as SockJs from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { }

  public connect() {
      const socket = new SockJs(`http://localhost:18080/api/socket`);

      const stompClient = Stomp.over(socket);

      return stompClient;
  }
}
