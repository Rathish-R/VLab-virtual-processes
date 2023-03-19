import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Water } from '../water';
import { GasOil } from '../GasOil';

@Component({
  selector: 'app-shell-and-tube',
  templateUrl: './shell-and-tube.component.html',
  styleUrls: ['./shell-and-tube.component.css']
})
export class ShellAndTubeComponent {
  isClickLabOn!: boolean;
  equipments!: string[];
  ResultObt!: boolean;
  isTheoryOn!: boolean;

  @Input() selected!: string;
  @Input() selectedOperation!: string;

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
  SFVisc: number = 0.00034 //N/sm2
  TFVisc: number = 0.0008 //N/sm2
  SFCond: number = 0.19 // W/moC
  TFCond: number = 0.59 // W/moC
  isResultOn: boolean = false;
  isValid: boolean = false;
  lmtd !: number;
  HtArea!: number;
  QShellSide!: number;
  TFCp: number = 4200;
  SFCp: number = 2480;
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
  OverallHTCoeff!: number;

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

    ShellFluid: new FormControl('Oil', Validators.required),
  });

  initialization() {
    var oil: GasOil = new GasOil(Number(this.inputValues.value.Thi));
    var water: Water = new Water(Number(this.inputValues.value.Tci));
    if (this.inputValues.value.ShellFluid == "Oil") {
      this.SFDensity = oil.density;
      this.TFDensity = water.density;
      this.SFCond = oil.k;
      this.TFCond = water.k;
      this.TFCp = water.cp;
      this.SFCp = oil.cp;
    }
  }
  roundOff() {
    this.HtArea = Number(this.HtArea.toFixed(3));
    this.BundleDia = Number(this.BundleDia.toFixed(3));
    this.TubesPerPass = Number(this.TubesPerPass.toFixed(3));
    this.HtubeSide = Number(this.HtubeSide.toFixed(3));
    this.BaffleSpace = Number(this.BaffleSpace.toFixed(3));
    this.pitch = Number(this.pitch.toFixed(3));
    this.ShellDia = Number(this.ShellDia.toFixed(3));
    this.HShellSide = Number(this.HShellSide.toFixed(3));
    this.OverallHTCoeff = Number(this.OverallHTCoeff.toFixed(3));

  }
  ShellSideCalc(): void {
    this.initialization();
    const Di = Number(this.inputValues.value.TubeDiaI);
    const Do = Number(this.inputValues.value.TubeDiaO);
    const U: number = 600    // W/m2oC
    var delT = Number(this.inputValues.value.Thi) - Number(this.inputValues.value.Tho);
    delT = Number(delT.toFixed(3))//oC
    this.QShellSide = Number(this.inputValues.value.Hflowrate) * delT * this.SFCp; // W
    this.HtArea = (this.QShellSide) / (U * this.getLmtd()); //m2 

    //surface Area of one tube
    var sATUbe = Math.PI * Do * (5 - 2 * (0.025));
    this.Tubes = Math.round(this.HtArea / sATUbe);

    if (this.inputValues.value.Passes == '2') {
      var k1 = 0.249;
      var n1 = 2.207;
      this.BundleDia = Do * Math.pow((this.Tubes / k1), (1 / n1));

    }
    this.ShellDia = this.BundleDia + 0.068;
    this.TubesPerPass = ((this.Tubes) / Number(this.inputValues.value.Passes));
    this.FlowAreaOfTubes = this.TubesPerPass * (Math.PI * Math.pow(Di, 2) / 4);
    this.VelocityTubeSide = Number(this.inputValues.value.Cflowrate) / (this.FlowAreaOfTubes * this.TFDensity);
    this.NReTs = (this.TFDensity * this.VelocityTubeSide * Di) / this.TFVisc;

    this.NPrTs = Number(this.TFCp * this.TFVisc) / this.TFCond;
    this.HtubeSide = this.Jh * this.NReTs * Math.pow(this.NPrTs, 0.33) * (this.TFCond / Di);
    this.BaffleSpace = this.ShellDia / 5;
    this.pitch = 1.25 * Number(this.inputValues.value.TubeDiaO);
    this.AreaShell = this.ShellDia * this.BaffleSpace * ((this.pitch) - Do) / this.pitch
    this.VelocityShellSide = Number(this.inputValues.value.Cflowrate) / (this.AreaShell * Number(this.SFDensity));
    const De = (Math.pow(this.pitch, 2) - (0.917 * Math.pow(Do, 2))) / Do;

    this.NReSs = (this.SFDensity * this.VelocityShellSide * De) / this.TFVisc;
    this.NPrSs = Number(this.SFCp * this.SFVisc) / this.SFCond;
    this.HShellSide = this.Jf * this.NReSs * Math.pow(this.NPrSs, 0.33) * (this.SFCond / Number(De));

    this.OverallHTCoeff = (1 / this.HShellSide) + (1 / 5000) + (Do / (Di * 5000)) + (Do / (Di * this.HtubeSide)) + (Do * Math.log(Do / Di) / (2 * 50));

    this.roundOff();
    // alert(this.HtArea);
    // alert(this.QShellSide)
    this.isCalculated = true;

    this.selectedOperation = "Result";
  }
  getLmtd(): number {
    debugger;
    const delT2 = Number(this.inputValues.value.Tho) - Number(this.inputValues.value.Tci);

    const delT1 = Number(this.inputValues.value.Thi) - Number(this.inputValues.value.Tco);

    this.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
    this.lmtd = Number(this.lmtd.toFixed(3));
    return this.lmtd;
  }



  onSubmit() {
    if (this.inputValues.invalid) {
      this.inputValues.markAllAsTouched();
      return;
    }
    this.ShellSideCalc();
  }
}