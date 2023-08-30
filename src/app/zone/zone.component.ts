import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AffiliateService } from 'app/Services/affiliate.service';
import { ZoneService } from 'app/Services/zone.service';
import { DataCenterService } from 'app/Services/data-center.service';


@Component({
  selector: 'zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent  {
 zone: string='';
 aff: string='';
 data: string='';
 zones:any;
 affs:any;
 datacenters:any;
  constructor(private router: Router ,private ZoneService: ZoneService, private AffiliateService: AffiliateService, private DataCenterService: DataCenterService) { }

  

 
  ngOnInit(): void {
    this.getZones();
    
    
  }
  
  getZones(){
    this.ZoneService.getZones().subscribe(res => {
        this.zones=res ;
      }
    ); 
  }
  
  getAffiliates(name:String){
    
    
    this.AffiliateService.getAffiliates(name).subscribe(res => {
        this.affs=res ;
      }
    ); 
  }

  getDataCenters(name:String){
    
    
    this.DataCenterService.getDataCenters(name).subscribe(res => {
      this.datacenters=res;
      }
    );

    }
  confirm() {
    if (this.data!=''){
      this.DataCenterService.sharedData=this.data;
    this.router.navigate(['/CurrentResources']);}
  }

}
