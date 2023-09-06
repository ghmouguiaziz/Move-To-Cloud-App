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
idD:number=this.DataCenterService.sharedIdData;
newappoiaas=new Resources()

  constructor(private DataCenterService: DataCenterService, private CurrentAppsService:CurrentAppsService) { }
  
  ngOnInit() {
    this.getCurrentApps(this.data);
    
    
    
    
  }
  getCurrentApps(name:String){
    
    
    this.CurrentAppsService.getCurrentApps(name).subscribe(res => {
        this.apps=res
      }
    );
    
    
  }
  addAppOIaaS(id:any){
    this.newappoiaas.type=TypeResource.CurrAppOIaaS;
    this.CurrentAppsService.addAppOIaaS(this.newappoiaas, id).subscribe(res => {
      this.getCurrentApps(this.data)
    }
  );

  }
  

}
