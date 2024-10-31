import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { liste_statistique } from '../data/liste_statistique.model';
import { StatistiquesResponse } from '../data/statistiqueReponse.model';
@Injectable({
  providedIn: 'root',
})
export class ListeStatServiceService {
  private readonly http = inject(HttpClient);
  private readonly STAT_URL = 'https://localhost:7209/api/ListeStat';
  SendList(
    liste_statistique: liste_statistique
  ): Observable<StatistiquesResponse> {
    return this.http.post<StatistiquesResponse>(
      this.STAT_URL,
      liste_statistique
    );
  }
}
