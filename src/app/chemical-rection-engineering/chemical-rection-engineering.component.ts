import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chemical-rection-engineering',
  templateUrl: './chemical-rection-engineering.component.html',
  styleUrls: ['./chemical-rection-engineering.component.css']
})
export class ChemicalRectionEngineeringComponent {
  selected:string="Semi Batch Reactor";
  isTreeOn :boolean =false;
  ismenuOn : boolean=false;
  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering",
];
 constructor(private router: Router){

 }
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Semi Batch Reactor","CSTR-Kinetics","CSTR-in series"
  ];
  selectedOperation :string="Theory";

  isTheoryOn: boolean = false;
  isFormulaOn: boolean = false;
  isSimulationOn: boolean = false;
  
  onClickLabs(isLab : boolean){
  return (isLab)? false:true;
  }
  ngOnInit() {
  
   
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
  onClickTheory() {
    this.isTheoryOn = true;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
  }
  onClickFormula() {
    this.isFormulaOn = true;
    this.isTheoryOn = false;
  }
  onClickSimulation() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = true;
  }
}
