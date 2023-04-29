import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Methanol } from '../methanol';
import { ShellAndTube } from '../shell-and-tube/ShellAndTube';
import { Water } from '../water';
import { VCondenser } from './VerticalCondenser';

@Component({
  selector: 'app-vertical-condenser',
  templateUrl: './vertical-condenser.component.html',
  styleUrls: ['./vertical-condenser.component.css']
})
export class VerticalCondenserComponent {

  isClickLabOn!: boolean;
  equipments!: string[];
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  log: any = [{
  }]
  logs: any[] = [
  ];
  EnthVap: number = 596500; //j/kg
  EnthCond: number = 247000; //j/kg
  DensC: number = 551;
  ViscC: number = 0.00016;
  CondC: number = 0.13;
  DensV: number = 19.5;
  ViscV: number = 0.008;

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  v: VCondenser = new VCondenser();
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

  ip = new FormGroup({
    HeatTransferCoeffAssumed: new FormControl(1000, Validators.required),
    VapFlowRate: new FormControl(12.5, Validators.required),
    OilFRUnit: new FormControl('Kg/sec', Validators.required),
    Waterflowrate: new FormControl(69, Validators.required),
    WaterFRUnit: new FormControl('Kg/sec', Validators.required),
    L: new FormControl(5, Validators.required),
    Thi: new FormControl(60, Validators.required),
    Tho: new FormControl(45, Validators.required),
    Tci: new FormControl(30, Validators.required),
    Tco: new FormControl(40, Validators.required),
    Passes: new FormControl('4', Validators.required),
    TubeDiaO: new FormControl(0.02, Validators.required), //m
    TubeDiaI: new FormControl(0.016, Validators.required), //m

    ShellFluid: new FormControl('Methanol', Validators.required),
  });
  methanol!: Methanol;
  water!: Water;
  initialization(th: number, tc: number) {
    debugger;
    this.v.isFeasible = false;
    this.water= new Water(tc);
    // var methanol: Methanol = new Methanol();
    this.methanol.getProperties(th);
    // var water: Water = new Water();
    if (this.ip.value.ShellFluid == "Methanol") {
      this.v.Tci = Number(this.ip.value.Tci);
      this.v.Thi = Number(this.ip.value.Thi);
      this.v.SFDensity = this.methanol.density;
      this.v.TFDensity = this.water.density;
      this.v.SFCond = this.methanol.k;
      this.v.TFCond = this.water.k;
      this.v.TFCp = this.water.cp;
      this.v.SFCp = this.methanol.cp;
      this.v.SFVisc = this.methanol.viscosity;
      this.v.TFVisc = this.water.viscosity;

      this.v.Tho = Number(this.v.Tho.toFixed(1));
      this.v.SFR = Number(this.ip.value.VapFlowRate);
      if (this.ip.value.OilFRUnit == "Kg/sec") {

        // this.TFR=Number(this.inputValues.value.Waterflowrate);
      }
      else if (this.ip.value.OilFRUnit == "Kg/min") {
        this.v.SFR = Number(this.ip.value.VapFlowRate) / 60;
        // this.TFR=Number(this.inputValues.value.Waterflowrate) / 60;
      }
      else if (this.ip.value.OilFRUnit == "Kg/hr") {
        console.log(this.ip.value.VapFlowRate);
        this.v.SFR = Number(this.ip.value.VapFlowRate) / (60 * 60);
        // this.TFR=Number(this.inputValues.value.Waterflowrate) /( 60 * 60);
      }
      if (this.ip.value.WaterFRUnit == "Kg/sec") {
        // this.s.TFR = Number(this.ip.value.Waterflowrate);
      }
      else if (this.ip.value.WaterFRUnit == "Kg/min") {
        // this.SFR = Number(this.inputValues.value.OilFlowRate) / 60;
        // this.s.TFR = Number(this.ip.value.Waterflowrate) / 60;
      }
      else if (this.ip.value.WaterFRUnit == "Kg/hr") {
        console.log(this.ip.value.VapFlowRate);
        // this.SFR = Number(this.inputValues.value.OilFlowRate) /(60 * 60) ;
        // this.s.TFR = Number(this.ip.value.Waterflowrate) / (60 * 60);
      }

    }
    // flowrates


  }
  roundOff() {
    // this.v.HtArea = Number(this.v.HtArea.toFixed(3));
    // this.v.BundleDia = Number(this.v.BundleDia.toFixed(3));
    // this.v.TubesPerPass = Number(this.v.TubesPerPass.toFixed(3));
    // this.v.HtubeSide = Number(this.v.HtubeSide.toFixed(3));
    // this.v.FlowAreaOfTubes = Number(this.v.FlowAreaOfTubes.toFixed(3));
    // this.v.VelocityTubeSide = Number(this.v.VelocityTubeSide.toFixed(3));
    // // this.v.VelocityShellSide = Number(this.v.VelocityShellSide.toFixed(3));
    // this.v.pitch = Number(this.v.pitch.toFixed(3));
    // this.v.ShellDia = Number(this.v.ShellDia.toFixed(3));
    // // this.v.HShellSide = Number(this.v.HShellSide.toFixed(3));
    // this.v.OverallHTCoeff = Number(this.v.OverallHTCoeff.toFixed(3));
    // this.v.PDropSs = Number(this.v.PDropSs.toFixed(3));
    // this.v.PDropTs = Number(this.v.PDropTs.toFixed(3));
    // this.v.QFound = Number(this.v.QFound.toFixed(3));
    // this.v.Tco = Number(this.v.Tco.toFixed(1));
    // this.v.Tho = Number(this.v.Tho.toFixed(1));

  }
  CondenserCalc(): void {
    console.log("calculating");
    debugger;
    this.v.Tco = Number(this.ip.value.Tco);
    this.v.Tho = Number(this.ip.value.Tho);
    this.v.AssumedU = Number(this.ip.value.HeatTransferCoeffAssumed)
    this.initialization(Number(this.ip.value.Thi), Number(this.ip.value.Tci));
    const Di = Number(this.ip.value.TubeDiaI);
    const Do = Number(this.ip.value.TubeDiaO);

    var U: number = Number(this.v.AssumedU)   // W/m2oC
    var delT = Number(this.ip.value.Thi) - Number(this.ip.value.Tho);
    var tavg = (Number(this.ip.value.Tci) + Number(this.ip.value.Tco)) / 2; // cold water avg temp
    delT = Number(delT.toFixed(3))//oC
    while (!this.v.isFeasible) {
      this.v.QShellSide = Number(this.ip.value.VapFlowRate) * (this.EnthVap - this.EnthCond); // W
      this.v.HtArea = (this.v.QShellSide) / (U * this.getLmtd()); //m2 

      //surface Area of one tube
      var sATUbe = Math.PI * Do * (5 - 2 * (0.025));
      this.v.Tubes = Math.round(this.v.HtArea / sATUbe);
      if (this.ip.value.Passes == '2') {
        var k1 = 0.249;
        var n1 = 2.207;
        this.v.BundleDia = Do * Math.pow((this.v.Tubes / k1), (1 / n1));

      }
      else if (this.ip.value.Passes == '4') {
        var k1 = 0.158;
        var n1 = 2.263;
        this.v.BundleDia = Do * Math.pow((this.v.Tubes / k1), (1 / n1));
      }
      debugger;
      this.v.ShellDia = this.v.BundleDia + 0.068;
      this.v.TubesPerPass = ((this.v.Tubes) / Number(this.ip.value.Passes));
      this.v.FlowAreaOfTubes = this.v.TubesPerPass * (Math.PI * Math.pow(Di, 2) / 4);
      this.v.TFR = (this.v.QShellSide) / (this.v.TFCp * (this.v.Tco - this.v.Tci));
      this.v.VelocityTubeSide = this.v.TFR / (this.v.FlowAreaOfTubes * this.v.TFDensity);
      this.v.NReTs = (this.v.TFDensity * this.v.VelocityTubeSide * Di) / this.v.TFVisc;

      this.v.NPrTs = Number(this.v.TFCp * this.v.TFVisc) / this.v.TFCond;
      this.v.HtubeSide = 0.021 * Math.pow(this.v.NReTs, 0.8) * Math.pow(this.v.NPrTs, 0.33) * (this.v.TFCond / Di);
      var Hio = (4200 * (1.35 + 0.02 * tavg) * Math.pow(this.v.VelocityTubeSide, 0.8)) / (Math.pow(Di, 0.2));
      console.log(Hio);
      // if(Hio> this.v.HtubeSide){
      //   this.v.HtubeSide=Hio;
      // }
      var rectifier = 1;

      console.log("rectifier" + rectifier);

      this.v.pitch = 1.25 * Number(this.ip.value.TubeDiaO);
      //Tube bundle HT Coeff
      this.v.TubeLoading = this.v.SFR / (4.88 * this.v.Tubes);

      //Avg no of tubes at center
      this.v.TubesC = Math.round((2 * this.v.BundleDia) / (3 * this.v.pitch));
      this.v.HTubeBundle = 0.95 * this.CondC * Math.pow(this.v.TubesC, -1 / 6) * Math.pow((this.DensC * (this.DensC - this.DensV) * 9.81) / (this.ViscC * this.v.TubeLoading), 1 / 3)
      const De = (Math.pow(this.v.pitch, 2) - (0.917 * Math.pow(Do, 2))) / Do;

      var OvU = (1 / this.v.HTubeBundle) + (1 / 5000) + (Do / (Di * 5000)) + (Do / (Di * this.v.HtubeSide)) + (Do * Math.log(Do / Di) / (2 * 50));
      OvU = 1 / OvU;
      console.log(OvU);
      this.v.OverallHTCoeff = OvU;
      this.v.PDropTs = (this.v.TFDensity * Math.pow(this.v.VelocityTubeSide, 2) * Number(this.ip.value.Passes) / 2) * (8 * 0.0035 * (5 - 2 * (0.025) / Di) + 2.5);
      this.v.PDropSs = (8 * 0.02 * this.v.ShellDia * (5 - 2 * (0.025)) * this.v.TFDensity * Math.pow(2.62, 2)) / (2 * De*5);
      this.v.PDropTs = (this.v.PDropTs * 14.69) / 101325;
      this.v.PDropSs = (this.v.PDropSs * 14.69) / 101325;
      debugger;
      var ActualArea = Math.PI * 5 * this.v.TubesPerPass * Number(this.ip.value.TubeDiaI) / 2;
      console.log(ActualArea);
      this.v.QFound = this.v.OverallHTCoeff * ActualArea * this.v.lmtd;
      if (U > OvU) {
        // this.v.isFeasible = false;
        // U -= (0.1) * U;
        // console.log(U);
        // rectifier += 0.2;

      }
      else {
        this.v.isFeasible = true;
        this.v.OverallHTCoeff=U;
      }
      this.v.OverallHTCoeff=U;
      this.v.isFeasible = true;
    }

    var avg = (Number(this.ip.value.Thi) + Number(this.ip.value.Tci)) / 2;
    this.initialization(avg, avg);
    debugger;
    this.v.Tho = Number(this.ip.value.Thi) - (this.v.QFound / (this.v.SFR * this.v.SFCp));
    this.v.Tco = Number(this.ip.value.Tci) + (this.v.QFound / (this.v.TFR * this.v.TFCp));

    this.log['Mh'] = this.ip.value.VapFlowRate;
    this.log['Mc'] = this.ip.value.Waterflowrate;

    this.log['Thi'] = this.ip.value.Thi;
    this.log['Tho'] = this.v.Tho;
    this.log['Tci'] = this.ip.value.Tci;
    this.log['Tco'] = this.v.Tco;
    this.logs.push(this.log);
    this.log = [];
    this.roundOff();
    console.log(this.logs);
    console.log(this.v);

    this.openSnackBar("Results have been calculated !! You can navigate to Results ", "Ok")
    this.v.isCalculated = true;
  }

  getLmtd(): number {
    debugger;
    const delT2 = Number(this.ip.value.Tho) - Number(this.ip.value.Tci);

    const delT1 = Number(this.ip.value.Thi) - Number(this.ip.value.Tco);

    this.v.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
    this.v.lmtd = Number(this.v.lmtd.toFixed(3));
    return this.v.lmtd;
  }
  onSubmit() {
    if (this.ip.invalid) {
      this.ip.markAllAsTouched();
      return;
    }
    if (Number(this.ip.value.Tci) >= Number(this.ip.value.Thi)) {
      alert('Cold Fluid inlet temperature should not be higher than Hot Fluid Temperature')
      this.v.isValid = false;
    }
    else {
      this.v.isValid = true;
      this.CondenserCalc();
    }

  }

}
