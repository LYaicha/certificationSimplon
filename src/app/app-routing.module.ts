import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PersonnelComponent } from './auth/personnel/personnel.component';
import { UsersComponent } from './auth/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { AdminComponent } from './auth/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ListePatientesAdminComponent } from './dashboard/liste-patientes-admin/liste-patientes-admin.component';


const routes: Routes = [
  {path:"accueil",component:AccueilComponent },
  {path:"inscriptionperson" , component:PersonnelComponent},
  {path:"inscriptionuser" , component:UsersComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"listepatientes" , component:ListePatientesAdminComponent}
  // {path:"dashADmin" , component:DashboardAdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
