import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Zone } from 'app/Models/Zone.model';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  zone1: string;
  constructor(private http : HttpClient) { }

  public getZones(): Observable <Zone> {
    return this.http.get<Zone> (`http://localhost:8090/data/getAllZone`);
  }

}


