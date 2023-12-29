import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allowNewServer = false;
  serverName="Bonjour";

  create = 'server is not created';

  onCreation() {
    this.create = 'server is created';
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;

  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000);
  }
}
