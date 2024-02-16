import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoogleCalendarService } from 'src/app/services/google-calendar-service.service';
@Component({
  selector: 'app-gestion-rv',
  templateUrl: './gestion-rv.component.html',
  styleUrls: ['./gestion-rv.component.css']
})
export class GestionRVComponent {
  constructor(private googleCalendarService: GoogleCalendarService) { }
  addEvent() {
    const eventData = {
      summary: 'Titre de l\'événement',
      startDateTime: '2024-02-04T10:00:00',
      endDateTime: '2024-02-04T12:00:00'
    };
  
    this.googleCalendarService.addEventToCalendar(eventData).subscribe(
      (response) => {
        console.log('Événement ajouté avec succès', response);
      },
      (error) => {
        console.log('Erreur lors de l\'ajout de l\'événement', error);
      }
    );
  }
  

}
