import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resources } from 'app/Models/CurrentApps.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentAppsService {

  constructor(private http : HttpClient) { }

  public getCurrentApps(name:String): Observable <Resources> {
    return this.http.get<Resources> ("http://localhost:8090/data/getAllResourcesByDataCenter/"+ name)
 }
 addApp(c:any , id:any){
  return this.http.post('http://localhost:8090/data/addResources/'+id , c) ;
}
}
