import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Methanol } from '../methanol';
import { ShellAndTube } from '../shell-and-tube/ShellAndTube';
import { Water } from '../water';
import { Rotary } from './RotaryDryer';
import { ReadVarExpr } from '@angular/compiler';
@Component({
  selector: 'app-rotary-dryer',
  templateUrl: './rotary-dryer.component.html',
  styleUrls: ['./rotary-dryer.component.css']
})

export class RotaryDryerComponent {
  isClickLabOn!: boolean;
  equipments!: string[];
  isTheoryOn!: boolean;
  log: any = [{
  }]
  logs: any[] = [
  ];
  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  s: Rotary = new Rotary();
  @Input() selected!: string;
  @Input() selectedOperation!: string;


  ngOnInit() {
    this.selected = "Rotary Dryer";

    this.isClickLabOn = true;
  }

  ip = new FormGroup({

    Tfi: new FormControl(30, Validators.required),
    Tfo: new FormControl(60, Validators.required),
    Tai: new FormControl(100, Validators.required),
    Twb: new FormControl(40, Validators.required),
    Tdb: new FormControl(100, Validators.required),
    Humidity: new FormControl(0.011, Validators.required),
    FR: new FormControl(27.7, Validators.required),
    PercWBasis: new FormControl("3 % to 0.25 %", Validators.required),

  });
  methanol: Methanol = new Methanol();
  water!: Water;
  initialization(th: number, tc: number) {
    debugger;
    this.s.xa = 0.0309;
    this.s.xb = 0.0025;
    var x = 100 / (1 + this.s.xa);
    this.s.w1 = 100 - this.s.xa;
    this.s.w2 = this.s.xb * x;

    this.s.Cps = 0.836;
    this.s.Cpv = 0.45;
    this.s.LVp = 2382.6;



    this.s.Tfi = Number(this.ip.value.Tfi);
    this.s.Tfo = Number(this.ip.value.Tfo);
    this.s.TAi = Number(this.ip.value.Tai);
    this.s.Tw = Number(this.ip.value.Twb);
    this.s.Td = Number(this.ip.value.Tdb);
    this.s.FR = Number(this.ip.value.FR);
    this.s.Humidity = Number(this.ip.value.Humidity);
    this.s.isFeasible = false;
    this.methanol.getProperties(th);
    this.water = new Water(tc);
   
     
  }
  roundOff() {
    this.s.HtArea = Number(this.s.HtArea.toFixed(3));
    this.s.BundleDia = Number(this.s.BundleDia.toFixed(3));
    this.s.TubesPerPass = Number(this.s.TubesPerPass.toFixed(3));
    this.s.HtubeSide = Number(this.s.HtubeSide.toFixed(3));
    this.s.BaffleSpace = Number(this.s.BaffleSpace.toFixed(3));
    this.s.FlowAreaOfTubes = Number(this.s.FlowAreaOfTubes.toFixed(3));
    this.s.VelocityTubeSide = Number(this.s.VelocityTubeSide.toFixed(3));
    this.s.VelocityShellSide = Number(this.s.VelocityShellSide.toFixed(3));
    this.s.pitch = Number(this.s.pitch.toFixed(3));
    this.s.ShellDia = Number(this.s.ShellDia.toFixed(3));
    this.s.HShellSide = Number(this.s.HShellSide.toFixed(3));
    this.s.OverallHTCoeff = Number(this.s.OverallHTCoeff.toFixed(3));
    this.s.PDropSs = Number(this.s.PDropSs.toFixed(3));
    this.s.PDropTs = Number(this.s.PDropTs.toFixed(3));
    this.s.QFound = Number(this.s.QFound.toFixed(3));
    this.s.Tco = Number(this.s.Tco.toFixed(1));
    this.s.Tho = Number(this.s.Tho.toFixed(1));

  }
  RotaryCalc(): void {
    console.log("calculating");

    this.s.TAo = (this.s.TAi - this.s.Tw) / (Math.exp(1.5));
    this.s.qt = ((this.s.Tfo - this.s.Tfi) * this.s.Cps) + ((this.s.xa - this.s.xb) * this.s.LVp) + (this.s.xb * (this.s.Tfo - this.s.Tw)) + ((this.s.xa - this.s.xb) * (this.s.TAi - this.s.TAo)) * this.s.FR;
    this.s.HumidHeatAir = this.s.Cps + (this.s.Cpv * this.s.Humidity);
    this.s.DryingMedium = this.s.qt / ((1 + this.s.Humidity) * (this.s.TAi - this.s.TAo) * this.s.HumidHeatAir)
    this.s.Wia = (1 + this.s.Humidity) * this.s.DryingMedium;
    var rectifier = 1;
    while (!this.s.isFeasible) {
      console.log(rectifier);
      this.s.Gassumed = 5000 * rectifier;
      this.s.Adryer = this.s.Wia / this.s.Gassumed;
      this.s.Ddryer = Math.sqrt(4 * this.s.Adryer / Math.PI);
      const delT2 = this.s.TAo - this.s.Wbt;

      const delT1 = this.s.TAo - this.s.Wbt;

      this.s.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
      this.s.lmtd = Number(this.s.lmtd.toFixed(3));
      this.s.L = this.s.qt / (0.21 * this.s.Gassumed * this.s.Ddryer * Math.PI * this.s.lmtd);
      this.s.LbyDRatio = this.s.L / this.s.Ddryer;
      if (this.s.LbyDRatio < 4) {
        rectifier -= 0.05;
      }
      else if (this.s.LbyDRatio > 10) {
        rectifier += 0.05;
      }
      else{
        this.s.isFeasible=true;
      }
    }


    // this.log['Mh'] = this.ip.value.OilFlowRate;
    // this.log['Mc'] = this.ip.value.Waterflowrate;


    this.log['Tho'] = this.s.Tho;

    this.log['Tco'] = this.s.Tco;
    this.logs.push(this.log);
    this.log = [];
    this.roundOff();
    console.log(this.logs);
    console.log(this.s);

    this.openSnackBar("Results have been calculated !! You can navigate to Results ", "Ok")
    this.s.isCalculated = true;
  }

  getLmtd(){
    // debugger;
    // const delT2 = Number(this.ip.value.Tho) - Number(this.ip.value.Tci);

    // const delT1 = Number(this.ip.value.Thi) - Number(this.ip.value.Tco);

    // this.s.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
    // this.s.lmtd = Number(this.s.lmtd.toFixed(3));
    // return this.s.lmtd;
  }
  onSubmit() {
    if (this.ip.invalid) {
      this.ip.markAllAsTouched();
      return;
    }
    if (Number(this.ip.value.Tfo) >= Number(this.ip.value.Tfi)) {
      alert('Feed inlet temperature should not be higher than Feed outlet Temperature')
      this.s.isValid = false;
    }
    else {

      this.s.isValid = true;
      this.RotaryCalc();
    }

  }

}