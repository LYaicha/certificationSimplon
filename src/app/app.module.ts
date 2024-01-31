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
import { FormsModule } from '@angular/forms';
import { ListePatientesAdminComponent } from './dashboard/liste-patientes-admin/liste-patientes-admin.component';
import { DataTablesModule } from 'angular-datatables';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
