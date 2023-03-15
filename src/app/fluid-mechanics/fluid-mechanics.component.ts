import { Component } from '@angular/core';

@Component({
  selector: 'app-fluid-mechanics',
  templateUrl: './fluid-mechanics.component.html',
  styleUrls: ['./fluid-mechanics.component.css']
})
export class FluidMechanicsComponent {
 selected:string="Helical Coil";
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Helical Coil","Fluidised Bed" ,"Reciprocating Pump", "Straight Pipes","Efflux Studies","Annulus Concentric Pipes", "Venturimeter & Orificemeter",
    "Packed Bed","Drag Coefficient"
  ];
  selectedOperation :string="Theory"; 
  onClickLabs(isLab : boolean){
  return (isLab)? false:true;
  }
  
}
