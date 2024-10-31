import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { liste_statistique } from '../data/liste_statistique.model';
@Injectable({
  providedIn: 'root',
})
export class ListeStatServiceService {
  private readonly http = inject(HttpClient);
  private readonly STAT_URL = 'http://localhost:3000/liste_stat';
  SendList(
    liste_statistique: liste_statistique
  ): Observable<liste_statistique> {
    return this.http.post<liste_statistique>(this.STAT_URL, liste_statistique);
  }
}
