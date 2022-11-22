import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  messages: string[] = [];

  constructor() {
    //logic
  }

  log(message: string) {
    this.messages.push(message);
  }
}
