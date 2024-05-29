import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    //as should do tree structure formation so under app root whichh is passed 
    //in main.ts as main component where we have our sub component needs to be defined or nested comp need to be created
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent]
})
export class AppComponent {
  title = 'FirstApp';
}
