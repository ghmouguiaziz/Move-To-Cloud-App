import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Zone } from 'app/Models/Zone.model';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  
  constructor(private http : HttpClient) { }

  public getZones(): Observable <Zone> {
    return this.http.get<Zone> (`http://localhost:8090/data/getAllZone`);
  }
  addZone(c:any){
    return this.http.post('http://localhost:8090/data/addZone', c) ;
  }
  
  deleteZone(id: any){
    return this.http.delete('http://localhost:8090/data/deleteZone/'+id) ;
  }
  addAffiliate(c:any , idZ:any){
    return this.http.post('http://localhost:8090/data/addAffiliate/'+idZ , c) ;
  }
  
  deleteAffiliate(id: any){
    return this.http.delete('http://localhost:8090/data/deleteAffiliate/'+id) ;
  }
  addDataCenter(c:any , idA:any){
    return this.http.post('http://localhost:8090/data/addDataCenter/'+idA , c) ;
  }
  
  deleteDataCenter(id: any){
    return this.http.delete('http://localhost:8090/data/deleteDataCenter/'+id) ;
  }
}


