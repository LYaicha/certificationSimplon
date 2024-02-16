import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any):Observable<any>{
    return this.http.post<any>(`${apiUrl}/auth/login`, data)
  }
  
  userConnect(accessToken: any){
    // return this.http.post<any>(`${apiUrl}/auth/me`, accessToken)
    return accessToken ? this.http.post<any>(`${apiUrl}/auth/me`, {}, {
      headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
    }) : of(null);
  }

  register(user:any){
    return this.http.post(`${apiUrl}/register_utilisateur`, user)
  }
  registerPs(PS:any){
    return this.http.post(`${apiUrl}/create_personnelsante`, PS)
  }
  // methode pour la connexion

}



// const email = (<HTMLInputElement>document.getElementById('email')).value;
// const password = (<HTMLInputElement>document.getElementById('password')).value;
// console.log('adl');
// const loginData: any = {
//   email: email,
//   password: password
// };
// console.log(loginData);


// this.http.post("http://127.0.0.1:8000/api/auth/login", loginData).subscribe({
//   next: (response: any) => {
//     console.log(response);
//     const token = response.token;
//     localStorage.setItem('token', token);
//     this.router.navigate(['dashboard']);
//   },
//   error: (error: any) => {
//     console.error(error);
//     console.log('bap');


    
//   }
// });