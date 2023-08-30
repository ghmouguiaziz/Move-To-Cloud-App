import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputeCapacities } from 'app/Models/ComputeCapacities.model';
@Injectable({
  providedIn: 'root'
})
export class CapacitiesService {

  constructor(private http: HttpClient) { }
  public getComputesCapa(): Observable <ComputeCapacities> {
    return this.http.get<ComputeCapacities> (`http://localhost:8090/data/getAllComputeCapacities`);
}
}
