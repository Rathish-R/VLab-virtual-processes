import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heat-transfer',
  templateUrl: './heat-transfer.component.html',
  styleUrls: ['./heat-transfer.component.css']
})
export class HeatTransferComponent {
  
  selected: string = "Shell and Tube Heat Exchanger";
  isTreeOn :boolean =false;
  ismenuOn : boolean=false;
  equipments!: string[];
  selectedOperation!: string;

  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering",
];
 constructor(private router: Router){

 }
  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";
    this.equipments = [
      "Shell and Tube Heat Exchanger", "Helical  Coil Heat Exchanger", "Double Pipe Heat Exchanger", "Jacketed Vessel"
    ,"Open Pan Evaporator","Batch"];
    this.selectedOperation = "Theory";
  }
selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    option = option.replace(" ","");
    this.navigateTo("/HeatTransfer");
  }
  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}


