import { Component } from '@angular/core';

@Component({
  selector: 'app-mechanical-operations',
  templateUrl: './mechanical-operations.component.html',
  styleUrls: ['./mechanical-operations.component.css']
})
export class MechanicalOperationsComponent {
  selected:string="Semi Batch Reactor";
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

