// import { Component } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-patientes-admin',
  templateUrl: './liste-patientes-admin.component.html',
  styleUrls: ['./liste-patientes-admin.component.css']
})
export class ListePatientesAdminComponent {
  
  dtOptions: DataTables.Settings = {};



  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  // this.dtOptions = {
  //   // ...
  //   headerClass: 'custom-header-class',
  //   cellClass: 'custom-cell-class',
  //   dom: 'lrtip', // Exemple de personnalisation de la disposition des éléments
  // };
}



