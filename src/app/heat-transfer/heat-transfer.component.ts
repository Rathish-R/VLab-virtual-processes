import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-heat-transfer',
  templateUrl: './heat-transfer.component.html',
  styleUrls: ['./heat-transfer.component.css']
})
export class HeatTransferComponent {
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
  SFDensity: number = 750 //kg/m3
  TFDensity: number = 995 //kg/m3
  SVisc: number = 0.00034 //N/sm2
  TVisc: number = 0.0008 //N/sm2
  SCond: number = 0.19 // W/moC
  TCond: number = 0.59 // W/moC
  isResultOn: boolean = false;
  isValid: boolean = false;
  lmtd !: number;
  HtArea!: number;
  QShellSide!: number;
  CpTubeSide: number = 4200;
  CpShellSide: number = 2480;
  TubeSheetThick: number = 0.025;
  BundleDia !: number;
  ShellDia!: number;
  FlowAreaOfTubes!: number;
  TubesPerPass!: number;
  VelocityTubeSide!: number;
  NRe!: number;
  NPr!: number;

  Tubes!: number;
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
    var delT = Number(this.inputValues.value.Thi) - Number(this.inputValues.value.Tho);
    delT = Number(delT.toFixed(3))//oC
    this.QShellSide = Number(this.inputValues.value.Hflowrate) * delT * this.CpShellSide; // W
    this.HtArea = (this.QShellSide) / (U * this.getLmtd()); //m2 
    this.HtArea = Number(this.HtArea.toFixed(3))
    //surface Area of one tube
    var sATUbe = Math.PI * Number(this.inputValues.value.TubeDiaO) * (5 - 2 * (0.025));
    this.Tubes = Math.round(this.HtArea / sATUbe);

    if (this.inputValues.value.Passes == '2') {
      var k1 = 0.249;
      var n1 = 2.207;
      this.BundleDia = Number(this.inputValues.value.TubeDiaO) * Math.pow((this.Tubes / k1), (1 / n1));
      this.BundleDia = Number(this.BundleDia.toFixed(3));
    }
    this.ShellDia = this.BundleDia + 0.068;
    this.TubesPerPass = ((this.Tubes) / Number(this.inputValues.value.Passes));
    this.FlowAreaOfTubes = this.TubesPerPass * (Math.PI * Math.pow(Number(this.inputValues.value.TubeDiaI), 2) / 4);
    this.VelocityTubeSide = Number(this.inputValues.value.Cflowrate) / (this.FlowAreaOfTubes * this.TFDensity);
    this.NRe = (this.TFDensity * this.VelocityTubeSide * Number(this.inputValues.value.TubeDiaI)) / this.TVisc;
    this.TubesPerPass = Number(this.TubesPerPass.toFixed(3));
    this.NPr = Number(this.CpTubeSide * this.TVisc) / this.TCond;




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


