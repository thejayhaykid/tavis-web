import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game';
import { Player } from 'src/models/player';
import { environment } from '../../environments/environment';

const baseUrl = environment.api.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class BcmService {

  constructor(private http: HttpClient) { }

  getBcmLeaderboardList(): Observable<any> {
    return this.http.get(baseUrl + `bcm/getBcmLeaderboardList`);
  }

  getBcmPlayer(id: number): Observable<any> {
    return this.http.get(baseUrl + `bcm/getBcmPlayer?playerId=` + id);
  }

}
