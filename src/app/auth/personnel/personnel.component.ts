import { Component } from '@angular/core';
// import Swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent {
  // attributs
  showForm: boolean =true
  nom: string= "";
  email: string= "";
  password: string= "";
  telephone: string= "";
  image: string = "";
  matricule: string = "";
  structure: string = "";
  Service: string = "";

  emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;


//Methodes 
// pour switcher entre les formulaires de connexion et de connexion
switchForm(){
  this.showForm=!this.showForm
  
}

// pour l'inscription


login() {
  console.log(this.email, this.password);
  if (this.email == '' || this.password == '') {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '',
      text: 'Veillez remplir les champs',
      showConfirmButton: true,
    });
  } else if (this.email.endsWith('@') || !this.email.includes('.')) {
    // Vérifie si l'email se termine juste par @
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '',
      text: 'Veillez saissir un email valide',
      showConfirmButton: true,
    });
  } else {
    let user = {
      email: this.email,
      password: this.password,
    };

    // let response: any;
    // this.authService.login(user).subscribe(
    //   (rep) => {
    //     response = rep;
    //     console.log(response);
    //     if (response) {
    //       // console.log ("C'est bon");
    //       Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: '',
    //         text: response.message,
    //         showConfirmButton: true,
    //       });

    //       this.route.navigate(['/acceuil']); // Redirection vers le dashbord concerné

    //       // On stocke les info de la requete dans notre localstorage
    //       localStorage.setItem('userConnect', JSON.stringify(response));

    //       // this.iscorrectValues = true; //Les données fournies sont correctes
    //     } else {
    //       console.log("L'adresse email est incorrecte");
    //       Swal.fire({
    //         position: 'center',
    //         icon: 'error',
    //         title: '',
    //         text: 'Veillez saissir un email valide',
    //         showConfirmButton: true,
    //       });
    //     }
    //   },
    //   (error) => {
    //     // this.iscorrectValues = false;
    //     console.log(error);
    //     Swal.fire({
    //       position: 'center',
    //       icon: 'error',
    //       title: '',
    //       text: 'Les informations sont incorrectes',
    //       showConfirmButton: true,
    //     });
    //   }
    // );
  }
}
// inscription(){
//   if (this.nom == "") {
//     this.alertMessage("error","Attention","Merci de renseigner votre nom!");
//   }else if(this.email == "") {
//     this.alertMessage("error","Attention","Merci de renseigner votre email!");
//   }else if(!this.email.match(this.emailPattern)){
//     this.alertMessage("error","Attention","Merci de renseigner un email valide!");
//   }else if(this.password == "") {
//     this.alertMessage("error","Attention","Merci de renseigner le mot de passe!");
//   }else if(this.password.length < 8){
//     this.alertMessage("error","Attention","le mot de ppasse doit etre supérieur ou égal à 8!");
//   }else if(this.telephone == "") {
//     this.alertMessage("error","Attention","Merci de renseigner votre numéro de téléphone!");
//   }else if(this.image == "") {
//     this.alertMessage("error","Attention","Merci de renseigner image de profil!");
//   }else if(this.matricule == ""){
//     this.alertMessage("error","Attention","Merci de renseigner votre matricule!");
//   }else {
//     // let newUser: User  = {
//     //   name: this.nom,
//     //   email: this.email,
//     //   password:this.password,
//     //   telephone: this.telephone,
//     //   image: this.image,
//     //   matricule: this.matricule,
//     //   structure: this.structure,
//     //   role: "Bailleur"
//     // };
// }
// }
  alertMessage(arg0: string, arg1: string, arg2: string) {
    throw new Error('Method not implemented.');
  }
}
