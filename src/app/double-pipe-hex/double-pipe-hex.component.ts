import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Methanol } from '../methanol';
import { ShellAndTube } from '../shell-and-tube/ShellAndTube';
import { Water } from '../water';
import { DoublePipeHEx } from './DoublePipe';

@Component({
  selector: 'app-double-pipe-hex',
  templateUrl: './double-pipe-hex.component.html',
  styleUrls: ['./double-pipe-hex.component.css']
})
export class DoublePipeHExComponent {
  isClickLabOn!: boolean;
  equipments!: string[];
  isTheoryOn!: boolean;
  log: any = [{
  }]
  logs: any[] = [
  ];
  Rfo: number = 0.000352;  // m2 K/W
  Rfi: number = 0.000176;
  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  s: DoublePipeHEx = new DoublePipeHEx();
  @Input() selected!: string;
  @Input() selectedOperation!: string;


  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";
    this.equipments = [
      "Shell and Tube Heat Exchanger", "Double Pipe Heat Exchanger", "Jacketed Vessel"
    ];
    this.isClickLabOn = true;
  }

  ip = new FormGroup({
    
    OilFlowRate: new FormControl(1.36, Validators.required),
    OilFRUnit: new FormControl('Kg/sec', Validators.required),
    Waterflowrate: new FormControl(1.38, Validators.required),
    WaterFRUnit: new FormControl('Kg/sec', Validators.required),

    Thi: new FormControl(140, Validators.required),
    Tho: new FormControl(125, Validators.required),
    Tci: new FormControl(20, Validators.required),
    Tco: new FormControl(35, Validators.required),

    TubeDiaO: new FormControl(0.0603, Validators.required), //m
    TubeDiaI: new FormControl(0.0525, Validators.required),
    AnnulusDiaI: new FormControl(0.0779, Validators.required), //
    AnnulusFluid: new FormControl('Cold water', Validators.required),
    Lhp: new FormControl(3.5, Validators.required), //Length of Hairpin

  });
  Hwater!: Water;
  Cwater!: Water;
  initialization(th: number, tc: number) {
    debugger;
    this.s.isFeasible = false;
    this.Hwater = new Water(th);
    this.Cwater = new Water(tc);
console.log(this.Hwater);
console.log(this.Cwater);

    this.s.SFDensity = this.Cwater.density;
    this.s.TFDensity = this.Hwater.density;
    this.s.SFCond = this.Cwater.k;
    this.s.TFCond = this.Hwater.k;
    this.s.TFCp = this.Hwater.cp;
    this.s.SFCp = this.Cwater.cp;
    this.s.SFVisc = this.Cwater.viscosity;
    this.s.TFVisc = this.Hwater.viscosity;

    this.s.SFR = Number(this.ip.value.Waterflowrate);
    this.s.TFR = Number(this.ip.value.OilFlowRate);
    this.s.Lhp = 3.5;

  }
  roundOff() {
    this.s.da= Number(this.s.da.toFixed(3));
    this.s.di= Number(this.s.di.toFixed(3));
    this.s.do= Number( this.s.do.toFixed(3));
    this.s.NReTs= Number(this.s.NReTs.toFixed(3));
    this.s.NPrTs= Number( this.s.NPrTs.toFixed(3));
    this.s.foulingT= Number(this.s.foulingT.toFixed(3));
    this.s.HtubeSide= Number( this.s.HtubeSide.toFixed(3));
    this.s.FlowAreaAnnulus= Number( this.s.FlowAreaAnnulus.toFixed(3));
    this.s.NReSs = Number(this.s.NReSs.toFixed(3));
    this.s.NPrSs= Number( this.s.NPrSs.toFixed(3));
    this.s.NNuTs= Number(this.s.NNuTs.toFixed(3))
    this.s.FlowAreaOfTubes = Number(this.s.FlowAreaOfTubes.toFixed(3));
    this.s.VelocityTubeSide = Number(this.s.VelocityTubeSide.toFixed(3));
    this.s.VelocityShellSide = Number(this.s.VelocityShellSide.toFixed(3));
    this.s.foulingS= Number(this.s.foulingS.toFixed(3))
    this.s.HShellSide = Number(this.s.HShellSide.toFixed(3));
    this.s.NNuSs= Number( this.s.NNuSs.toFixed(3));
    this.s.de= Number( this.s.de.toFixed(3));
    this.s.HeatDuty= Number( this.s.HeatDuty.toFixed(3));
    this.s.Nhp= Number(this.s.Nhp.toFixed(3));
    this.s.OverallHTCoeff = Number(this.s.OverallHTCoeff.toFixed(3));
    this.s.PDropSs = Number(this.s.PDropSs.toFixed(3));
    this.s.PDropTs = Number(this.s.PDropTs.toFixed(3));
    this.s.QFound = Number((this.s.QFound/1000).toFixed(3));
    this.s.Tco = Number(this.s.Tco.toFixed(1));
     this.s.Tho = Number(this.s.Tho.toFixed(1));
     this.s.Ahp= Number( this.s.Ahp.toFixed(3));

     this.s.HtArea= Number( this.s.HtArea.toFixed(3));
  }
  DblPipeCalc(): void {
    console.log("calculating");
    this.initialization(Number(this.ip.value.Thi), Number(this.ip.value.Tci));
    const Di = Number(this.ip.value.TubeDiaI);
    const Do = Number(this.ip.value.TubeDiaO);
    const Da = Number(this.ip.value.AnnulusDiaI);
    this.s.da = Da;
    this.s.di = Di;
    this.s.do = Do;
    // const U: number = Number(this.ip.value.HeatTransferCoeffAssumed)   // W/m2oC
    var delT = Number(this.ip.value.Thi) - Number(this.ip.value.Tho);
    delT = Number(delT.toFixed(3))//oC

    // TUbe side  calculation
    this.s.FlowAreaOfTubes = Math.PI * Math.pow(Di, 2) / 4;
    this.s.VelocityTubeSide = this.s.TFR / (this.s.FlowAreaOfTubes * this.s.TFDensity);
    this.s.NReTs = (this.s.TFDensity * this.s.VelocityTubeSide * Di) / this.s.TFVisc;
    this.s.NPrTs = Number(this.s.TFCp * this.s.TFVisc) / this.s.TFCond;
    this.s.foulingT = 1 / Math.pow((1.53 * Math.log10(this.s.NReTs) - 3.28), 2);
    var ft = this.s.foulingT;
    this.s.NNuTs = ((ft / 2) * this.s.NReTs * this.s.NPrTs) / (1 + (8.7 * Math.sqrt(ft / 2) * (this.s.NPrTs - 1)))
    this.s.HtubeSide = this.s.NNuTs * this.s.TFCond / Di;

    // shellside calculation
    this.s.FlowAreaAnnulus = Math.PI * (Math.pow(Da, 2) - Math.pow(Do, 2)) / 4;
    var Dh = Da - Do;

    this.s.VelocityShellSide = this.s.SFR / (this.s.FlowAreaAnnulus * Number(this.s.SFDensity));
    this.s.NReSs = (this.s.SFDensity * this.s.VelocityShellSide * Dh) / this.s.SFVisc;
    this.s.NPrSs = Number(this.s.SFCp * this.s.SFVisc) / this.s.SFCond;
    this.s.foulingS = 1 / Math.pow((3.64 * Math.log10(this.s.NReSs) - 3.28), 2);
    var fs = this.s.foulingS;
    this.s.NNuSs = ((fs / 2) * this.s.NReSs * this.s.NPrSs) / (1 + (8.7 * Math.sqrt(fs / 2) * (this.s.NPrSs - 1)));
    this.s.de = (Math.pow(Da, 2) - Math.pow(Do, 2)) / Do;
    this.s.HShellSide = this.s.NNuSs * this.s.SFCond / this.s.de;
    // Overall Heat transfer

    this.s.OverallHTCoeff = (1 / this.s.HShellSide) + this.Rfo + (Do * this.Rfi / (Di)) + (Do / (Di * this.s.HtubeSide)) + (Do * Math.log(Do / Di) / (2 * 50));
    this.s.OverallHTCoeff = 1 / this.s.OverallHTCoeff;

    this.s.HeatDuty = Number(this.ip.value.OilFlowRate) * delT * this.s.SFCp; // W
    this.s.HtArea = (this.s.HeatDuty) / (this.s.OverallHTCoeff * this.getLmtd()); //m2 
    this.s.QFound = this.s.OverallHTCoeff *  this.s.HtArea * this.s.lmtd;
    this.s.Ahp = 2 * this.s.Lhp * Math.PI * this.s.do;
    this.s.Nhp = Math.round(this.s.HtArea / this.s.Ahp);

    this.s.PDropTs = (4 * ft * this.s.Lhp * this.s.TFDensity * Math.pow(this.s.VelocityTubeSide, 2) * this.s.Nhp) / Di;
    this.s.PDropSs = (4 * fs * this.s.Lhp * this.s.SFDensity * Math.pow(this.s.VelocityShellSide, 2) * this.s.Nhp) / Dh;
    this.s.PDropTs = (this.s.PDropTs * 14.69) / 101325;
    this.s.PDropSs = (this.s.PDropSs * 14.69) / 101325;
    //surface Area of one tube
    var sATUbe = Math.PI * Do * (5 - 2 * (0.025));
    var rectifier = 1;
    while (!this.s.isFeasible) {
      console.log("rectifier" + rectifier);
      this.s.BaffleSpace = (this.s.ShellDia / 5) * rectifier;
      this.s.pitch = 1.25 * Number(this.ip.value.TubeDiaO);
      const De = (Math.pow(this.s.pitch, 2) - (0.917 * Math.pow(Do, 2))) / Do;
      var ActualArea = Math.PI * 5 * this.s.TubesPerPass * Number(this.ip.value.TubeDiaI) / 2;
      console.log(ActualArea);
      // this.s.QFound = this.s.OverallHTCoeff * ActualArea * this.s.lmtd;
      if (this.s.PDropTs > 10 || this.s.PDropSs > 10) {
        this.s.isFeasible = true;
        rectifier += 0.2;
      }
      else {
        this.s.isFeasible = true;
      }

    }
    var avg = (Number(this.ip.value.Thi) + Number(this.ip.value.Tci)) / 2;
    var avgHwater :Water = new Water(avg);
    var avgCwater :Water = new Water(avg);
    debugger;
    this.s.Tho = Number(this.ip.value.Thi) - (this.s.QFound / (this.s.SFR * avgCwater.cp));
    this.s.Tco = Number(this.ip.value.Tci) + (this.s.QFound / (this.s.TFR * avgHwater.cp));

    this.log['Mh'] = this.ip.value.OilFlowRate;
    this.log['Mc'] = this.ip.value.Waterflowrate;

    this.log['Thi'] = this.ip.value.Thi;
    this.log['Tho'] = (this.s.Tho).toFixed(3);
    this.log['Tci'] = this.ip.value.Tci;
    this.log['Tco'] = (this.s.Tco).toFixed(3);
    this.logs.push(this.log);
    this.log = [];
    this.roundOff();
    console.log(this.logs);
    console.log(this.s);

    this.openSnackBar("Results have been calculated !! You can navigate to Results ", "Ok")
    this.s.isCalculated = true;
  }

  getLmtd(): number {
    debugger;
    var delT2 = Number(this.ip.value.Tho) - Number(this.ip.value.Tci);

    var delT1 = Number(this.ip.value.Thi) - Number(this.ip.value.Tco);
    if (delT2 == delT1) {
      this.s.lmtd=delT1
      return this.s.lmtd;
    }
    else {
      this.s.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
      this.s.lmtd = Number(this.s.lmtd.toFixed(3));
      return this.s.lmtd;
    }

  }
  onSubmit() {
    if (this.ip.invalid) {
      this.ip.markAllAsTouched();
      return;
    }
    if (Number(this.ip.value.Tci) >= Number(this.ip.value.Thi)) {
      alert('Cold Fluid inlet temperature should not be higher than Hot Fluid Temperature')
      this.s.isValid = false;
    }
    else {

      this.s.isValid = true;
      this.DblPipeCalc();
    }

  }

}
