import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculOvulationService } from 'src/app/services/calcul-ovulation.service';


@Component({
  selector: 'app-mon-cycle',
  templateUrl: './mon-cycle.component.html',
  styleUrls: ['./mon-cycle.component.css']
})
export class MonCycleComponent  {
  // attributs
  CalculPOs!: any[];
  CalculPO!: {
    dateRegles: '';
    dureeCycle: '';
  };
  dateEstimeeOvulation: string = '';
    periodeFertiliteEstimee: string = '';


  calculPOForm!: FormGroup;
localStorage: any;
  constructor(private calculOvulationService: CalculOvulationService, private fb: FormBuilder) {
    this.CalculPOs = [];
    
    this.calculPOForm = this.fb.group({
      dateRegles: ['', Validators.required],
      dureeCycle: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.dateEstimeeOvulation = localStorage.getItem('dateEstimeeOvulation') || '';
    this.periodeFertiliteEstimee = localStorage.getItem('periodeFertiliteEstimee') || '';
  }

  submitForm() {
    console.log(this.calculPOForm.value);
    const POData = new FormData();
    POData.append('dateRegles', this.calculPOForm.value.dateRegles);
    POData.append('dureeCycle', this.calculPOForm.value.dureeCycle);
    console.log(POData);
    console.log(this.calculPOForm);

    this.calculOvulationService.calPeriodeOvulation(POData).subscribe((response) => {
      console.log(response);
      this.CalculPOs.unshift(this.calculPOForm.value)

      this.calculOvulationService.calPeriodeOvulation(POData).subscribe((response: any) => {
        console.log(response);
        if ('Date_estimée_de_votre_ovulation' in response && 'Votre_période_de_fertilité_estimée' in response) {
          this.dateEstimeeOvulation = response.Date_estimée_de_votre_ovulation;
          this.periodeFertiliteEstimee = response.Votre_période_de_fertilité_estimée;
        }
      });
       // Stockage des valeurs dans le local storage
    
    });
  }

}
