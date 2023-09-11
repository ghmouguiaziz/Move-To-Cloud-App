import { Component, OnInit } from '@angular/core';
import { EnvCompute } from 'app/Models/EnvCompute.model';
import { Availablity } from 'app/Models/EnvCompute.model';
import { RessService } from 'app/Services/ress.service';
import { EnvStorage } from 'app/Models/EnvStorage.Model';
import { EnvControlNetwork } from 'app/Models/EnvControlNetwork.model';

@Component({
  selector: 'app-CurrentResources',
  templateUrl: './CurrentResources.component.html',
  styleUrls: ['./CurrentResources.component.css']
})
export class CurrentResourcesComponent implements OnInit {
idD:any;
data:any; 
computes:any;
storages:any;
controlnetworks:any;
newcompute=new EnvCompute()
newstorage=new EnvStorage()
newcontrolnetwork=new EnvControlNetwork()
  constructor(private RessService:RessService) {}
  
  ngOnInit() {
  this.idD =localStorage.getItem('idD')
  this.data =localStorage.getItem('data')
  console.log(this.idD)
  this.getComputes(this.data);
  this.getStorages(this.data);
  this.getControlNetworks(this.data);
  
  
  
}
getComputes(name:String){
  
  
  this.RessService.getComputes( 'available',name).subscribe(res => {
      this.computes=res
    }
  );
  
  
}
addComputeAva(id:any){

  this.newcompute.availablity=Availablity.Available;
  this.newcompute.sfps=this.newcompute.qty*6;
  this.newcompute.sfpspare=this.newcompute.spareQty*6;
  this.RessService.addCompute(this.newcompute, id).subscribe();
    window.location.reload()
  }
  
  getStorages(name:String){
  
  
    this.RessService.getStorages( 'available',name).subscribe(res => {
        this.storages=res
      }
    );
    
    
  }
  addStorageAva(id:any){
  
    this.newstorage.availablity=Availablity.Available;
    this.newstorage.sfps=this.newstorage.qty*4;
    this.newstorage.sfpspare=this.newstorage.spareQty*4;
    this.RessService.addStorage(this.newstorage, id).subscribe();
      window.location.reload()
    }
    getControlNetworks(name:String){
  
  
      this.RessService.getControlNetworks( 'available',name).subscribe(res => {
          this.controlnetworks=res
        }
      );
      
      
    }
    addControlNetworkAva(id:any){
    
      this.newcontrolnetwork.availablity=Availablity.Available;
      this.RessService.addControlNetwork(this.newcontrolnetwork, id).subscribe();
        window.location.reload()
      }
    

}


