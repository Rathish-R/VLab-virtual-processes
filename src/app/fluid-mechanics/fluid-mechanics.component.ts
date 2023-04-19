import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fluid-mechanics',
  templateUrl: './fluid-mechanics.component.html',
  styleUrls: ['./fluid-mechanics.component.css']
})
export class FluidMechanicsComponent {
 selected:string="Flow Through Helical Coil";
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Flow Through Helical Coil","Fluidised Bed" ,"Reciprocating Pump", "Straight Pipes","Efflux Studies","Annulus Concentric Pipes", "Venturimeter & Orificemeter",
    "Packed Bed","Drag Coefficient"
  ];
  isTreeOn :boolean =false;
  ismenuOn : boolean=false;
  selectedOperation!: string;

  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering"];
 constructor(private router: Router){

 }
  ngOnInit() {
  
    this.equipments = [
      "Shell and Tube Heat Exchanger", "Helical  Coil Heat Exchanger", "Double Pipe Heat Exchanger", "Jacketed Vessel"
    ,"Open Pan Evaporator"];
    this.selectedOperation = "Theory";
    this.selectedExp(this.selected);
  }
selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
  
}
