import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mass-transfer',
  templateUrl: './mass-transfer.component.html',
  styleUrls: ['./mass-transfer.component.css']
})
export class MassTransferComponent {
  selected: string = "Shell and Tube Heat Exchanger";
  equipments!: string[];
  selectedOperation!: string;
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  ismenuOn:boolean=false;
  isTreeOn:boolean=false;
  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering",
];
 constructor(private router: Router){

 }
  ngOnInit() {
    this.selected = "Simple Distillation";
    this.equipments = [
      "Simple Distillation", "Packed Column distillation", "Steam distillation","Rotary dryer",
      "Tray dryer","Leaching Studies","Solid-Air Diffusivity measurement","Liquid-Liquid Extraction","Cooling Tower"
    ];
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