import { Component, OnInit } from '@angular/core';
import { DataCenterService } from 'app/Services/data-center.service';
import { CurrentAppsService } from 'app/Services/current-apps.service';
import { Resources } from 'app/Models/CurrentApps.model'; 
import { TypeResource } from 'app/Models/CurrentApps.model';



@Component({
  selector: 'app-CurrentApps',
  templateUrl: './CurrentApps.component.html',
  styleUrls: ['./CurrentApps.component.css']
})
export class CurrentAppsComponent implements OnInit {
data:any;
oiaas:any;
paas:any;
resspaas:any;
idD:any;
newapp=new Resources()

  constructor(private DataCenterService: DataCenterService, private CurrentAppsService:CurrentAppsService) { }
  
  ngOnInit() {
    this.idD =localStorage.getItem('idD')
    this.data =localStorage.getItem('data')
    console.log(this.idD)
    this.getCurrentApps(this.data);
    
    
    
    
  }
  getCurrentApps(name:String){
    
    
    this.CurrentAppsService.getCurrentApps('CurrAppOIaaS',name).subscribe(res => {
        this.oiaas=res
      });
      this.CurrentAppsService.getCurrentApps('CurrAppLocalPaaS',name).subscribe(res => {
        this.paas=res
      });
      this.CurrentAppsService.getCurrentApps('CurrRessLocalPaaS',name).subscribe(res => {
        this.resspaas=res
      }
    );
    
    
  }
  addAppOIaaS(id:any){
    this.newapp.type=TypeResource.CurrAppOIaaS;
    this.CurrentAppsService.addApp(this.newapp, id).subscribe()
      window.location.reload()
    }
  
  addAppPaaS(id:any){
    this.newapp.type=TypeResource.CurrAppLocalPaaS;
    this.CurrentAppsService.addApp(this.newapp, id).subscribe()
      window.location.reload()
    }
  

  addAppRessPaaS(id:any){
    this.newapp.type=TypeResource.CurrRessLocalPaaS;
    this.CurrentAppsService.addApp(this.newapp, id).subscribe()
      window.location.reload()
    }
  

  }
  


