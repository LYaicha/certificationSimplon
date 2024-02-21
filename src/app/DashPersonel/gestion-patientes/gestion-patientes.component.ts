import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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

  constructor(private patientService: PatientService,  private route: Router,
    private authservice: AuthService,) {}

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
  
  logout() {
    this.authservice.logout().subscribe((response) => {
      console.log(response);
      localStorage.removeItem('access_token');

      this.route.navigate(['/accueil']);
    });
  }
}
