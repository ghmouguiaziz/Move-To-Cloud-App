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
 affName:string='';
 data: string='';
 zones:any;
 affs:any;
 datacenters:any;
 idZ:any;
 idA:any;
 idD:any;
 newzone: { name: string } = { name: '' };
 newaff: { name: string , fullName: string } = { name: '' , fullName: '' };
 newdata: { name: string } = { name: '' };


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
  addZone(){
    
    this.ZoneService.addZone(this.newzone).subscribe()
    window.location.reload()
    
    
  }
  deleteZone(id:any){
    this.ZoneService.deleteZone(id).subscribe()
    window.location.reload()
  }
  
  
  getAffiliates(name:String){
    
    
    this.AffiliateService.getAffiliates(name).subscribe(res => {
        this.affs=res ;
      }
    ); 
  }
  addAffiliate(idZ:any){
    
    this.ZoneService.addAffiliate(this.newaff, idZ).subscribe()
    window.location.reload()
    
    
  }
  deleteAffiliate(id:any){
    this.ZoneService.deleteAffiliate(id).subscribe()
    window.location.reload()
  }

  getDataCenters(name:String){
    
    
    this.DataCenterService.getDataCenters(name).subscribe(res => {
      this.datacenters=res;
      }
    );

    }
    addDataCenter(idA:any){
    
      this.ZoneService.addDataCenter(this.newdata, idA).subscribe()
      window.location.reload()
      
      
    }
    deleteDataCenter(id:any){
      this.ZoneService.deleteDataCenter(id).subscribe()
      window.location.reload()
    }
  confirm() {
    if (this.data!=''){
      this.DataCenterService.sharedData=this.data;
    this.router.navigate(['/CurrentResources']);}
  }

  getidZone(c:any){
    this.zones.forEach(z => {
      switch (z.name) {
        case c:
          this.idZ=z.idZone;
          
          
          break;
        
        default:
          
          break;
      }
    });
        
    
  }
  getidAff(c:any){
    this.affs.forEach(a => {
      switch (a.name) {
        case c:
          this.idA=a.idAffiliate;
          this.affName=a.idAffiliate.fullName;
          console.log(this.idA.fullName)
          console.log(a.idAffiliate.fullName)
          console.log(this.zones)
          
          
          break;
        
        default:
          
          break;
      }
    });
        
    
  }
  getAffName(c:any){
    this.affs.forEach(a => {
      switch (a.name) {
        case c:
          
          this.affName=a.fullName;
          console.log(this.affName)
          
          console.log(this.zones)
          
          
          break;
        
        default:
          
          break;
      }
    });
        
    
  }
  getidData(c:any){
    this.datacenters.forEach(d => {
      switch (d.name) {
        case c:
          this.idD=d.idDataCenter;
          
          break;
        
        default:
          
          break;
      }
    });
        
    
  }
      

}
