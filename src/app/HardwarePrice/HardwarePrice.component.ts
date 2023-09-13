import { Component, OnInit } from '@angular/core';
import { ServersAndDevicesPrice } from 'app/Models/ServersAndDevicesPrice.model';
import { ServersAndDevicesPriceService } from 'app/Services/servers-and-devices-price.service';
import { ServerType } from 'app/Models/ServersAndDevicesPrice.model';
@Component({
  selector: 'app-HardwarePrice',
  templateUrl: './HardwarePrice.component.html',
  styleUrls: ['./HardwarePrice.component.css']
})
export class HardwarePriceComponent implements OnInit {
servers:any;
devices:any;
new=new ServersAndDevicesPrice()
  constructor(private ServersAndDevicesPriceService:ServersAndDevicesPriceService) { }

  ngOnInit() {
    this.getPrices()
  }
  getPrices(){
    
    
    this.ServersAndDevicesPriceService.getPrices('server').subscribe(res => {
        this.servers=res
      });
      this.ServersAndDevicesPriceService.getPrices('device').subscribe(res => {
        this.devices=res
      });
      
  }
  addServer(){
    this.new.type=ServerType.Server;
    this.ServersAndDevicesPriceService.addServer(this.new).subscribe()
      window.location.reload()
    }
    addDevice(){
      this.new.type=ServerType.Device;
      this.ServersAndDevicesPriceService.addServer(this.new).subscribe()
        window.location.reload()
      }

}
