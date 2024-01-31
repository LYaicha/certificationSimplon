import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

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
    const data = {
      email: this.emailConnexion,
      password: this.passwordConnexion,
    };
// ici on appel le service  puis on decript le token pour avoir l'object
    this.authService.login(data).subscribe((response) => {
      localStorage.setItem(
        'access_token',
        JSON.stringify(response.access_token).replace(/['"]+/g, '')
      );

      // a partir de l'objet obtenu on peut obtenir le role du user connecté et à partir du role on fait une condition pour le redigiré
      this.authService.userConnect(localStorage.getItem('access_token')).subscribe(
        (user) => {
          console.log(user.role);
          if (user.role=='admin') {
            this.router.navigate(['dashboard']);
            
          }
          
          
        }
      )

      console.log(response.access_token);
    });
  }
}
