import { Component } from '@angular/core';

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
  ngOnInit() {
    this.selected = "Simple Distillation";
    this.equipments = [
      "Simple Distillation", "Packed Column distillation", "Steam distillation","Rotary dryer",
      "Tray dryer","Leaching Studies","Solid-Air Diffusivity measurement","Liquid-Liquid Extraction","Cooling Tower"
    ];
    this.selectedOperation = "Theory";
  }
  
  onClickTheory() {
    this.selectedOperation="Theory";
  }
  onClickFormula() {
    this.selectedOperation="Formulae";
  }
  onClickSimulation() {
    this.selectedOperation="Simulation";
  }
  onClickResult() {
 this.selectedOperation="Result";
  }
}