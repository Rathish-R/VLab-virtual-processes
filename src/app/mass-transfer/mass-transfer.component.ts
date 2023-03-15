import { Component } from '@angular/core';

@Component({
  selector: 'app-mass-transfer',
  templateUrl: './mass-transfer.component.html',
  styleUrls: ['./mass-transfer.component.css']
})
export class MassTransferComponent {
  selected:string="Semi Batch Reactor";
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Shell and Tube Heat Exchanger","Double Pipe Heat Exchanger","Jacketed Vessel"
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
