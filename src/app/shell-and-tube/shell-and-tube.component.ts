import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shell-and-tube',
  templateUrl: './shell-and-tube.component.html',
  styleUrls: ['./shell-and-tube.component.css']
})
export class ShellAndTubeComponent {
  selected: string = "Shell and Tube Heat Exchanger";
  isClickLabOn!: boolean;
  equipments!: string[];
  selectedOperation!: string;
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";
    this.equipments = [
      "Shell and Tube Heat Exchanger", "Double Pipe Heat Exchanger", "Jacketed Vessel"
    ];
    this.isClickLabOn = true;
    this.selectedOperation = "Theory";
    this.ResultObt = false;
    this.isTheoryOn = true;
  }



  isFormulaOn: boolean = false;
  isSimulationOn: boolean = false;
  Di: number = 0.16;//m
  Do: number = 0.2;//m
  Passes: number = 1;
  Baffless: number = 2;
  noOfTubes: number = 37
  LengthTube: number = 0.6
  isResultOn: boolean = false;
  isValid: boolean = false;
  lmtd !: number;
  HtArea!: number;
  QShellSide!: number;
  CpTubeSide: number = 4200;
  CpShellSide: number = 2480;
  TubeSheetThick : number =0.025;
Tubes! : number;
  inputValues = new FormGroup({
    Hflowrate: new FormControl(27.7, Validators.required),
    HFRUnit: new FormControl('1', Validators.required),
    Cflowrate: new FormControl(69, Validators.required),
    CFRUnit: new FormControl('1', Validators.required),
    Thi: new FormControl(95, Validators.required),
    Tho: new FormControl(40, Validators.required),
    Tci: new FormControl(25, Validators.required),
    Tco: new FormControl(40, Validators.required),
    Passes: new FormControl('2', Validators.required),
    // TubeLength: new FormControl('', Validators.required),
    TubeDiaO: new FormControl(0.02, Validators.required), //m
    TubeDiaI: new FormControl(0.016, Validators.required), //m

    // ShellFluid: new FormControl('Hot', Validators.required),
  });

  ShellSideCalc(): void {
 
    const U: number = 600    // W/m2oC
    const delT = Number(this.inputValues.value.Thi) - Number(this.inputValues.value.Tho); //oC
    this.QShellSide = Number(this.inputValues.value.Hflowrate) * delT*this.CpShellSide ; // W
    this.HtArea=(this.QShellSide)/(U*this.getLmtd()); //m2 
    //surface Area of one tube
var sATUbe= Math.PI*Number(this.inputValues.value.TubeDiaO)*(5 - 2*(0.025));
this.Tubes=Math.round(this.HtArea/sATUbe);

if(this.inputValues.value.Passes=='2'){
  
}

    // alert(this.HtArea);
    // alert(this.QShellSide)

  }
  getLmtd(): number {
    debugger;
    const delT2 = Number(this.inputValues.value.Tho) - Number(this.inputValues.value.Tci);

    const delT1 = Number(this.inputValues.value.Thi) - Number(this.inputValues.value.Tco);

    this.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
    
    return this.lmtd;
  }
  onClickLabs(isLab: boolean) {
    return (isLab) ? false : true;
  }
  onClickTheory() {
    this.isTheoryOn = true;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
    this.isResultOn = false;
  }
  onClickFormula() {
    this.isFormulaOn = true;
    this.isTheoryOn = false;
    this.isSimulationOn = false;
    this.isResultOn = false;
  }
  onClickSimulation() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = true;
    this.isResultOn = false;
  }
  onClickResult() {
    this.isTheoryOn = false;
    this.isFormulaOn = false;
    this.isSimulationOn = false;
    this.isResultOn = true;
  }
  onSubmit() {
    if (this.inputValues.invalid) {
      this.inputValues.markAllAsTouched();
      return;
    }
    this.ShellSideCalc();
  }
}


