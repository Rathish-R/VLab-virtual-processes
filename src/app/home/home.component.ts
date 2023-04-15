import { Component } from '@angular/core';
import { Labs } from '../Labs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  labs: string[] = Labs;
  _selectedParent!: string;
  _selected!:string;
  selectedLab!:string[];
  Fm : any[]=[{
    name :'Fluid Mechanics',
    labs : ["Helical Coil","Fluidised Bed" ,"Reciprocating Pump", "Straight Pipes","Efflux Studies","Annulus Concentric Pipes", "Venturimeter & Orificemeter",
    "Packed Bed","Drag Coefficient"]}
  ];
  Ht : any[]=[{
    name :'Heat Transfer',
    labs : ["Shell and Tube Heat Exchanger", "Helical  Coil Heat Exchanger", "Double Pipe Heat Exchanger", "Jacketed Vessel"
  ,"Open Pan Evaporator"]}];
  Mt : any[]=[{
    name :'Mass Transfer',
    labs : ["Simple Distillation", "Packed Column distillation", "Steam distillation","Rotary dryer",
    "Tray dryer","Leaching Studies","Solid-Air Diffusivity measurement","Liquid-Liquid Extraction","Cooling Tower"
  ]}];
  Mo : any[]=[{
    name :'Mechanical operation',
    labs : ["Ball Mill","Drop Weight Crusher","Roll Crusher","Jaw Crusher","Air Elutriator","Leaf Filter",
    "Cyclone Separator","Batch Sedimentation","Screen Effectiveness"]}
  ];
  Cre : any[]=[{
    name :'Chemical Reaction Engineering',
    labs : ["Batch Reactor-Kinetics","Packed Reactor-Kinetics","Sonochemical Reactor-Kinetics","CSTR-Kinetics","PFR-RTD","Temperature Dependant Kinetics",
    "Combined Reactor in Series ","CSTR-Series","Packed Bed-RTD"]
  }];
  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering"];
  isFmOn !: boolean;
  isHtOn!: boolean;
  isMtOn!: boolean;
  isMoOn!: boolean;
  isCREOn!: boolean;
  isHomeOn: boolean = true;
  isAboutOn: boolean = false
  color:string="rgb(216,191,216)";
 
    constructor(private router: Router) 
  {
    this.initialize();
  }
  initialize() {
    this.isFmOn = false;
    this.isHtOn = false;
    this.isMtOn = false;
    this.isMoOn = false;
    this.isCREOn = false;
    this.isHomeOn = true;
    this.isAboutOn = false
  }
  selected(option: string) {
    this._selected = option.replace(" ","");
    this.navigateTo(this._selected);
  }
  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
  selectedP(option: string) {
    this._selectedParent = option;
  }
  OnClickHome() {
    this.initialize();

    this.isHomeOn = true;
  }
  onClickAbout() {
    this.isHomeOn = false;
    this.isAboutOn = true;
  }
  onClickFm() {
    this.initialize();
    this.isHomeOn = false;

    this.isFmOn = true;
  }
  onClickHt() {
    this.initialize();
    this.isHomeOn = false;
    this.isHtOn = true;
  }
  onClickMt() {
    this.initialize();
    this.isHomeOn = false;
    this.isMtOn = true;
  }
  onClickCre() {
    this.initialize();
    this.isHomeOn = false;
    this.isCREOn = true;
  }
  onClickMo() {
    this.initialize();
    this.isHomeOn = false;
    this.isMoOn = true;
  }
  onSelect(){

  }

}
