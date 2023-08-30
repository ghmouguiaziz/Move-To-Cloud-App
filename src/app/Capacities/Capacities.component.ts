
import { Component, OnInit } from '@angular/core';
import { ComputeCapacities } from 'app/Models/ComputeCapacities.model';
import { CapacitiesService } from 'app/Services/capacities.service';

@Component({
  selector: 'app-Capacities',
  templateUrl: './Capacities.component.html',
  styleUrls: ['./Capacities.component.css']
})
export class CapacitiesComponent implements OnInit {
computes:any;
newcompute=new ComputeCapacities();
  constructor(private CapacitiesService : CapacitiesService ) { }

  ngOnInit(): void {
    this.getComputesCapa();
    
    
  }
  
  getComputesCapa(){
    this.CapacitiesService.getComputesCapa().subscribe(res => {
        this.computes=res, console.log(this.computes);
      }
    ); 
  }
  addCompute(){
    
    this.CapacitiesService.addCompute(this.newcompute).subscribe()
    
    window.location.reload()
    console.log(this.newcompute)
  }

}
