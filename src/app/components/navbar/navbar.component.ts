
import { Component } from '@angular/core';
import { nav_data } from './navData';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  open:boolean=true;
  navData = nav_data;

  toggleOpen():void{
    this.open = !this.open;
  }

  

  
}
