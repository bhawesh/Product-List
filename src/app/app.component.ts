import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{Title}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/Welcome']">Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/product']">Product List</a></li>
      </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>`,
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 Title : String = 'Acme Product-Management';
}
