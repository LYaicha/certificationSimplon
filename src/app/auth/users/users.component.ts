import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  registerForm!:FormGroup
  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router){
this.registerForm=this.fb.group({
  nom:['',Validators.required],
  email:['',[Validators.required, Validators.email]],
  password:['',[Validators.required,Validators.min(8),Validators.max(20)]],
  telephone:['',Validators.required],
  image:[''],
})
  }
  submitForm(){
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((response)=>{
      this.route.navigateByUrl('/monCycle')
      console.log(response);
    })
  }

}
