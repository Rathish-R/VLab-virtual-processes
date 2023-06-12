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
    Massflux: new FormControl(5000, Validators.required),
    PercWBasis: new FormControl("3 % to 0.25 %", Validators.required),

  });
  methanol: Methanol = new Methanol();
  water!: Water;
  initialization() {
    debugger;
    this.s.xa = 0.0309;
    this.s.xb = 0.0025;
    this.s.ms = 100 / (1 + this.s.xa);
    this.s.w1 = 100 - this.s.ms; // initial moisture
    this.s.w2 = this.s.xb * this.s.ms;

    this.s.Cps = 0.2;//kcal/kgoC
    this.s.Cpv = 0.45;//kcal/kgoC
    this.s.Cpl = 1;//kcal/kgoC
    this.s.LVp = 570; //kcal/kgoC



    this.s.Tfi = Number(this.ip.value.Tfi);
    this.s.Tfo = Number(this.ip.value.Tfo);
    this.s.TAi = Number(this.ip.value.Tai);
    this.s.Tw = Number(this.ip.value.Twb);
    this.s.Td = Number(this.ip.value.Tdb);
    this.s.Gassumed = Number(this.ip.value.Massflux);
    this.s.Humidity = Number(this.ip.value.Humidity);
    this.s.isFeasible = false;

  }
  roundOff() {

    this.s.ms = Number(this.s.ms.toFixed(3));
    this.s.TAo = Number(this.s.TAo.toFixed(3));
    this.s.w1 = Number(this.s.w1.toFixed(3));
    this.s.w2 = Number(this.s.w2.toFixed(3));
    this.s.qt = Number(this.s.qt.toFixed(3));
    this.s.HumidHeatAir = Number(this.s.HumidHeatAir.toFixed(3));
    this.s.DryingMedium = Number(this.s.DryingMedium.toFixed(3));
    this.s.Wia = Number(this.s.Wia.toFixed(3));
    this.s.Adryer = Number(this.s.Adryer.toFixed(3));
    this.s.Ddryer = Number(this.s.Ddryer.toFixed(3));
    this.s.lmtd = Number(this.s.lmtd.toFixed(3));
    this.s.L = Number(this.s.L.toFixed(3));
    this.s.LbyDRatio = Number(this.s.LbyDRatio.toFixed(3));


  }
  RotaryCalc(): void {
    console.log("calculating");
    this.initialization();
    this.s.TAo = (this.s.TAi - this.s.Tw) / (Math.exp(1.5)) + this.s.Tw;
    this.s.qt = (((this.s.Tfo - this.s.Tfi) * this.s.Cps) + (this.s.xa * this.s.Cpl * (this.s.Tw - this.s.Tfi)) + ((this.s.xa - this.s.xb) * this.s.LVp) + (this.s.xb * (this.s.Tfo - this.s.Tw)) + ((this.s.xa - this.s.xb) * this.s.Cps * (this.s.TAo - this.s.Tw))) * this.s.ms;
    this.s.HumidHeatAir = this.s.Cps + (this.s.Cpv * this.s.Humidity);
    this.s.DryingMedium = this.s.qt / ((1 + this.s.Humidity) * (this.s.TAi - this.s.TAo) * this.s.HumidHeatAir)
    this.s.Wia = (1 + this.s.Humidity) * this.s.DryingMedium;
    var rectifier = 1;
    while (!this.s.isFeasible) {
      console.log(rectifier);
      this.s.Gassumed *= rectifier;
      this.s.Adryer = this.s.Wia / this.s.Gassumed;
      this.s.Ddryer = Math.sqrt(4 * this.s.Adryer / Math.PI);
      const delT2 = this.s.TAo - this.s.Tw;

      const delT1 = this.s.TAi - this.s.Tw;

      this.s.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
      this.s.lmtd = Number(this.s.lmtd.toFixed(3));
      this.s.L = this.s.qt / (0.21 * Math.pow(this.s.Gassumed, 0.67) * this.s.Ddryer * Math.PI * this.s.lmtd);
      this.s.LbyDRatio = this.s.L / this.s.Ddryer;
      if (this.s.LbyDRatio < 4) {
        rectifier -= 0.05;
      }
      else if (this.s.LbyDRatio > 10) {
        rectifier += 0.05;
      }
      else {
        this.s.isFeasible = true;
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

  onSubmit() {
    if (this.ip.invalid) {
      this.ip.markAllAsTouched();
      return;
    }
    if (Number(this.ip.value.Tfi) > Number(this.ip.value.Tfo)) {
      alert('Feed inlet temperature should not be higher than Feed outlet Temperature')
      this.s.isValid = false;
    }
    else if (Number(this.ip.value.Tfi) > Number(this.ip.value.Twb)) {
      alert('Feed inlet temperature should not be higher than Vapouridation temperature - wet bulb temperature')
      this.s.isValid = false;
    }
    else {

      this.s.isValid = true;
      this.RotaryCalc();
    }

  }

}