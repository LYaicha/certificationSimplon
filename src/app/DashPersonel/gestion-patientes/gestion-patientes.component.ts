import { Component } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-gestion-patientes',
  templateUrl: './gestion-patientes.component.html',
  styleUrls: ['./gestion-patientes.component.css']
})
export class GestionPatientesComponent {
  dtOptions: DataTables.Settings = {};
  patient = {
    // Les propriétés du patient
  };

  constructor(private patientService: PatientService) {}

  // ajouterPatient(): void {
  //   this.patientService.createPatient(this.patient).subscribe(
  //     (response) => {
  //       console.log('Patient créé avec succès', response);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la création du patient', error);
  //     }
  //   );
  // }
}
