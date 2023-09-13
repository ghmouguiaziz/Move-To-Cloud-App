import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicensesPrice } from 'app/Models/LicensesPrice.model';
import { ServersAndDevicesPrice } from 'app/Models/ServersAndDevicesPrice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersAndDevicesPriceService {

  constructor(private http: HttpClient) { }

  public getPrices( t:any): Observable <ServersAndDevicesPrice> {
    return this.http.get<ServersAndDevicesPrice> ('http://localhost:8090/data/findByTypeServer/'+t)
 }
 addServer(c:any){
  return this.http.post('http://localhost:8090/data/addServersAndDevicesPrice/' , c) ;
}
addDevice(c:any){
  return this.http.post('http://localhost:8090/data/addServersAndDevicesPrice/' , c) ;
}
getLPrices(): Observable <LicensesPrice> {
  return this.http.get<LicensesPrice> ('http://localhost:8090/data/getAllLicensesPrice')
}
addLicense(c:any){
return this.http.post('http://localhost:8090/data/addLicensesPrice/' , c) ;
}

}
