import { Component } from '@angular/core';
import { ServersService } from '../servers/servers.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ServersService]
})
export class AppComponent {
}
