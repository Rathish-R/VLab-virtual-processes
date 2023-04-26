import { Component, ViewChild } from '@angular/core';
import { Labs } from '../Labs';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { EMap } from './Equipments';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
 
  labs: string[] = Labs;
  _selectedParent!: string;
  _selected!:string;
  selectedLab!:string[];
  m :any=EMap;
  Fm : any[]=[
    "Helical Coil","Fluidised Bed" ,"Reciprocating Pump", "Straight Pipes","Efflux Studies","Annulus Concentric Pipes", "Venturimeter & Orificemeter",
    "Packed Bed","Drag Coefficient"
  ];
  Ht : any[]=["Shell and Tube Heat Exchanger", "Helical  Coil Heat Exchanger", "Verical Condenser","Double Pipe Heat Exchanger", "Jacketed Vessel"
  ,"Open Pan Evaporator"];
  Mt : any[]=["Simple Distillation", "Packed Column distillation", "Steam distillation","Rotary dryer",
    "Tray dryer","Leaching Studies","Solid-Air Diffusivity measurement","Liquid-Liquid Extraction","Cooling Tower"
  ];
  Mo : any[]=[
    
    "Ball Mill","Drop Weight Crusher","Roll Crusher","Jaw Crusher","Air Elutriator","Leaf Filter",
    "Cyclone Separator","Batch Sedimentation","Screen Effectiveness"
  ];
  Cre : any[]=["Batch Reactor-Kinetics","Packed Reactor-Kinetics","Sonochemical Reactor-Kinetics","CSTR-Kinetics","PFR-RTD","Temperature Dependant Kinetics",
    "Combined Reactor in Series ","CSTR-Series","Packed Bed-RTD"]
  ;
  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering"];
  
  isFmOn !: boolean;
  isHtOn!: boolean;
  isMtOn!: boolean;
  isMoOn!: boolean;
  isCREOn!: boolean;
  isHomeOn: boolean = true;
  isAboutOn: boolean = false
  color:string="rgb(216,191,216)";
 
    constructor(
      private router: Router,
      private snackBar: MatSnackBar
      ) 
  {

  }
  ngOnInit() {
    setTimeout(() => {
      this.snackBar.open('You can choose the desired stream using the respective buttons or via Menu bar', 'Ok', {
        duration: 5000,
      });
    }, 2000);
  }
  
  selected(option: string) {
    this._selected = option.replace(" ","");
    this.navigateTo(this._selected);
  }
  navigateTo(url: string): void {
    this.router.navigateByUrl(this.m[url]);
  }
  selectedP(Parent: string , child :string) {
    this.router.navigate(['Home',this.m[Parent],this.m[child]]);
  }
 

}
