import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './auth/admin/admin.component';
import { PersonnelComponent } from './auth/personnel/personnel.component';
import { UsersComponent } from './auth/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListePatientesAdminComponent } from './dashboard/liste-patientes-admin/liste-patientes-admin.component';
import { DataTablesModule } from 'angular-datatables';
import { RessourcesAdminComponent } from './dashboard/ressources-admin/ressources-admin.component';
import { GestionContenuComponent } from './dashboard/gestion-contenu/gestion-contenu.component';
import { AjoutPersonelComponent } from './dashboard/ajout-personel/ajout-personel.component';
import { GestionRVComponent } from './DashPersonel/gestion-rv/gestion-rv.component';
import { GestionPatientesComponent } from './DashPersonel/gestion-patientes/gestion-patientes.component';
import { RessourcesComponent } from './DashPersonel/ressources/ressources.component';
import { MonCycleComponent } from './DashUser/mon-cycle/mon-cycle.component';
import { ForumComponent } from './DashUser/forum/forum.component';
import { DevenirPSComponent } from './DashUser/devenir-ps/devenir-ps.component';
import { ChoixDirectionComponent } from './choix-direction/choix-direction.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AuthComponent,
    AdminComponent,
    PersonnelComponent,
    UsersComponent,
    DashboardComponent,
    LoginComponent,
    ListePatientesAdminComponent,
    RessourcesAdminComponent,
    GestionContenuComponent,
    AjoutPersonelComponent,
    GestionRVComponent,
    GestionPatientesComponent,
    RessourcesComponent,
    MonCycleComponent,
    ForumComponent,
    DevenirPSComponent,
    ChoixDirectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
