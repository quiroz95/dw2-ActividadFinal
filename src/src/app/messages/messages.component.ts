import { Component } from '@angular/core';
import { MessageService } from '../message.service';//

// Este componente maneja la visualización de mensajes en la interfaz de usuario.
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}