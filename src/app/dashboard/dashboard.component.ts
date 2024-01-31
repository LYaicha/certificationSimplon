import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent {
  // attributs

showTable: boolean = true;
dtOptions: any;


  // methodes
  switchForm() {
    this.showTable = !this.showTable;
  }

}
