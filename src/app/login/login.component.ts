import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  // attributs
  showForm: boolean = true;
  nom: string = '';
  telephone: string = '';
  image: string = '';
  matricule: string = '';
  structure: string = '';
  Service: string = '';

  emailConnexion: string = '';
  passwordConnexion: string = '';

  //Methodes
  // pour switcher entre les formulaires de connexion et de connexion
  switchForm() {
    this.showForm = !this.showForm;
  }

  // methode pour la connexion
  login() {
   // Vérifier si les champs sont vides
  if (!this.emailConnexion || !this.passwordConnexion) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: 'Veuillez remplir tous les champs.',
    });
    return;
  }
    const data = {
      email: this.emailConnexion,
      password: this.passwordConnexion,
    };
// ici on appel le service  puis on decript le token pour avoir l'object
    this.authService.login(data).subscribe((response) => {
      // console.log(response);
      localStorage.setItem('access_token',JSON.stringify(response.access_token).replace(/['"]+/g, '')
      );

      // a partir de l'objet obtenu on peut obtenir le role 
      this.authService.userConnect(localStorage.getItem('access_token')).subscribe(
        (user) => {
          console.log(user.role);
          if (user.role=='admin') {
            this.router.navigate(['dashboard']);
            
          }else  if (user.role=='personnelsante') {
            this.router.navigate(['gestionPatientePS']);
            
          }else if (user.role=='utilisateur') {
            this.router.navigate(['monCycle']);
          
          }
          
        }
      )

      console.log(response.access_token);
    });
  }
}
