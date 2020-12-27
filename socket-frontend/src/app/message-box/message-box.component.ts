import { Component, Input, OnInit } from '@angular/core';
import { MessageEntity } from '../MessageEntity';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor() { }

  @Input() message: MessageEntity;
  @Input() pseudo : string;

  ngOnInit() {
  }

}
