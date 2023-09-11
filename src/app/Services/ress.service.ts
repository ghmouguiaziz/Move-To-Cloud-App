import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvCompute } from 'app/Models/EnvCompute.model';
import { EnvControlNetwork } from 'app/Models/EnvControlNetwork.model';
import { EnvStorage } from 'app/Models/EnvStorage.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessService {

  constructor(private http : HttpClient) { }

  public getComputes(t:any,name:String): Observable <EnvCompute> {
    return this.http.get<EnvCompute> ("http://localhost:8090/data/findByAvailablity/"+t+'/'+name)
 }
 addCompute(c:any , id:any){
  return this.http.post('http://localhost:8090/data/addEnvCompute/'+id , c) ;
}
getStorages(t:any,name:String): Observable <EnvStorage> {
  return this.http.get<EnvStorage> ("http://localhost:8090/data/findByAvailablityStorage/"+t+'/'+name)
}
addStorage(c:any , id:any){
return this.http.post('http://localhost:8090/data/addEnvStorage/'+id , c) ;
}
getControlNetworks(t:any,name:String): Observable <EnvControlNetwork> {
  return this.http.get<EnvControlNetwork> ("http://localhost:8090/data/findByAvailablityControlNetwork/"+t+'/'+name)
}
addControlNetwork(c:any , id:any){
return this.http.post('http://localhost:8090/data/addEnvControlNetwork/'+id , c) ;
}
}

