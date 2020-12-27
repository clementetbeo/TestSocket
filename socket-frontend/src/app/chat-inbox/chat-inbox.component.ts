import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { MessageEntity } from '../MessageEntity';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css']
})
export class ChatInboxComponent implements OnInit {
  SOCKET_ENDPOINT = '192.168.1.12:3000';
  username = '';
  tmpuser = '';

  message : string;

  messages : MessageEntity[] = []

  socket;
  constructor() { }
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
     this.socket = io(this.SOCKET_ENDPOINT);
     this.socket.on('message-broadcast', (data: MessageEntity) => {
      if (data) {        
       this.messages.push(data);
       }
     });
  }

  SendMessage() {
    let msg:MessageEntity = {sender:this.username,text:this.message}
    this.socket.emit('message', msg);
    this.message = '';
 }

}
