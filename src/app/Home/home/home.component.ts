import { Component, computed, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { liste_statistique } from '../../data/liste_statistique.model';
import { ListeStatServiceService } from '../../services/liste-stat-service.service';
import { Router } from '@angular/router';
import { StatistiquesResponse } from '../../data/statistiqueReponse.model';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  readonly router = inject(Router);
  readonly listeservice = inject(ListeStatServiceService);
  resultats: StatistiquesResponse | null = null;
  inputEmpty = signal('');
  valueList = computed(() => {
    const data = this.inputEmpty();
    if (data !== '') {
      const dataReturn = data.split(',').map((x: string) => Number(x));
      return dataReturn;
    } else {
      return [];
    }
  });

  readonly form = new FormGroup({
    input: new FormControl(''),
  });

  onSubmit() {
    const inputValue = this.form.get('input')?.value;
    if (inputValue !== null && inputValue !== undefined) {
      this.inputEmpty.set(inputValue);
    }
    const listTosend = new liste_statistique(this.valueList());
    console.log(listTosend);
    console.log('submit');
    this.listeservice.SendList(listTosend).subscribe({
      next: (response) => {
        this.resultats = response; // Stocker la réponse
        console.log("Réponse de l'API:", response);
        this.router.navigate(['/Home/']); // Rediriger si nécessaire
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi des données:", error);
      },
    });
  }

  get input() {
    return this.form.get('input') as FormControl;
  }
}
