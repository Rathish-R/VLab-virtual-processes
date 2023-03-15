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
  isCalculated: boolean = false;
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
  VelocityShellSide!: number;
  Jh: number = 0.0035;
  Jf: number = 0.004;
  NReTs!: number;
  NReSs!: number;
  HtubeSide!: number;

  HShellSide!: number;
  NPrTs!: number;
  NPrSs!: number;
  BaffleSpace!: number;
  pitch!: number;
  AreaShell!: number;
  OverallHTCoeff!:number;

  Tubes!: number;
  inputValues = new FormGroup({
    Hflowrate: new FormControl(27.7, Validators.required),
    // HFRUnit: new FormControl('Kg/sec', Validators.required),
    Cflowrate: new FormControl(69, Validators.required),
    // CFRUnit: new FormControl('Kg/sec', Validators.required),
    Thi: new FormControl(95, Validators.required),
    Tho: new FormControl(40, Validators.required),
    Tci: new FormControl(25, Validators.required),
    Tco: new FormControl(40, Validators.required),
    Passes: new FormControl('2', Validators.required),
    // TubeLength: new FormControl('', Validators.required),
    TubeDiaO: new FormControl(0.02, Validators.required), //m
    TubeDiaI: new FormControl(0.016, Validators.required), //m

    ShellFluid: new FormControl('Hot Fluid', Validators.required),
  });

  ShellSideCalc(): void {
const Di=Number(this.inputValues.value.TubeDiaI);
const Do=Number(this.inputValues.value.TubeDiaO);
    const U: number = 600    // W/m2oC
    var delT = Number(this.inputValues.value.Thi) - Number(this.inputValues.value.Tho);
    delT = Number(delT.toFixed(3))//oC
    this.QShellSide = Number(this.inputValues.value.Hflowrate) * delT * this.CpShellSide; // W
    this.HtArea = (this.QShellSide) / (U * this.getLmtd()); //m2 
    this.HtArea = Number(this.HtArea.toFixed(3))
    //surface Area of one tube
    var sATUbe = Math.PI * Do* (5 - 2 * (0.025));
    this.Tubes = Math.round(this.HtArea / sATUbe);

    if (this.inputValues.value.Passes == '2') {
      var k1 = 0.249;
      var n1 = 2.207;
      this.BundleDia = Do * Math.pow((this.Tubes / k1), (1 / n1));
      this.BundleDia = Number(this.BundleDia.toFixed(3));
    }
    this.ShellDia = this.BundleDia + 0.068;
    this.TubesPerPass = ((this.Tubes) / Number(this.inputValues.value.Passes));
    this.FlowAreaOfTubes = this.TubesPerPass * (Math.PI * Math.pow(Di, 2) / 4);
    this.VelocityTubeSide = Number(this.inputValues.value.Cflowrate) / (this.FlowAreaOfTubes * this.TFDensity);
    this.NReTs = (this.TFDensity * this.VelocityTubeSide * Di) / this.TVisc;
    this.TubesPerPass = Number(this.TubesPerPass.toFixed(3));
    this.NPrTs = Number(this.CpTubeSide * this.TVisc) / this.TCond;
    this.HtubeSide = this.Jh * this.NReTs * Math.pow(this.NPrTs, 0.33) * (this.TCond / Di);
    this.BaffleSpace = this.ShellDia / 5;
    this.pitch = 1.25 * Number(this.inputValues.value.TubeDiaO);
    this.AreaShell = this.ShellDia * this.BaffleSpace * ((this.pitch) - Do) / this.pitch
    this.VelocityShellSide = Number(this.inputValues.value.Cflowrate) / (this.AreaShell * Number(this.SFDensity));
    const De = (Math.pow(this.pitch, 2) - (0.917 * Math.pow(Do, 2))) / Do;

    this.NReSs = (this.SFDensity * this.VelocityShellSide * De) / this.TVisc;
    this.NPrSs = Number(this.CpShellSide * this.SVisc) / this.SCond;
    this.HShellSide = this.Jf * this.NReSs * Math.pow(this.NPrSs, 0.33) * (this.SCond / Number(De));

this.OverallHTCoeff=(1/this.HShellSide)+(1/5000)+(Do/(Di*5000))+(Do/(Di*this.HtubeSide))+(Do*Math.log(Do/Di)/(2*50));


    // alert(this.HtArea);
    // alert(this.QShellSide)
    this.isCalculated = true;
    this.onClickResult();
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


