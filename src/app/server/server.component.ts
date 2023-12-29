import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl:'../server/server.component.html',
  styles:['color:green']
})
export class ServerComponent {
  serverID=123;
  serverStatus='running';
  user='ntc'

  getServeruser(){
    return this.user;
  }
  
 }
