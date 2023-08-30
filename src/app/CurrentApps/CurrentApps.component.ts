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
data:String=this.DataCenterService.sharedData;
apps:any;
appsOIaaS:Resources[]=[];
appsPaaS:Resources[]=[];
ress:Resources[]=[];
ress1:Resources[]=[];
  constructor(private DataCenterService: DataCenterService, private CurrentAppsService:CurrentAppsService) { }
  
  ngOnInit() {
    this.getCurrentApps(this.data);
    this.ress1=this.apps
    this.div(this.DataCenterService.sharedData1);
    
    
  }
  getCurrentApps(name:String){
    
    
    this.CurrentAppsService.getCurrentApps(name).subscribe(res => {
        this.apps=res ,this.DataCenterService.sharedData1=this.apps ;
      }
    );
    
    
  }
  div(ap:Resources[]) {
    
    console.log(this.apps);
    console.log(this.data);
    ap.forEach(app => {
      switch (app.typeResource) {
        case TypeResource.CurrAppOIaaS:
          this.appsOIaaS.push(app);
          break;
        case TypeResource.CurrAppLocalPaaS:
          this.appsPaaS.push(app);
          break;
        case TypeResource.CurrRessLocalPaaS:
          this.ress.push(app);
          break;
        default:
          
          break;
      }
    });
        
    
  }

}
