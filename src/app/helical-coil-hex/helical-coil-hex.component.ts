import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Methanol } from '../methanol';
import { MatTabGroup } from '@angular/material/tabs';
import { Water } from '../water';
import { VOil } from '../VegeOil';
import { HelicalCoilHEx } from './HelicalCoilHEx';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-helical-coil-hex',
  templateUrl: './helical-coil-hex.component.html',
  styleUrls: ['./helical-coil-hex.component.css']
})
export class HelicalCoilHExComponent {
  isClickLabOn!: boolean;
  equipments!: string[];
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  h: HelicalCoilHEx = new HelicalCoilHEx();
  @Input() selected!: string;
  @Input() selectedOperation!: string;

  Rf: number = 0.00082;
  Ra: number = 0.00082;
  absRoughness = 0.0005 //m
  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";

    this.isClickLabOn = true;
    this.selectedOperation = "Theory";
    this.ResultObt = false;
    this.isTheoryOn = true;
  }

  ip = new FormGroup({
    HeatTransferCoeffAssumed: new FormControl(500, Validators.required),
    OilFlowRate: new FormControl(0.377, Validators.required),
    OilFRUnit: new FormControl('Kg/sec', Validators.required),
    Waterflowrate: new FormControl(0.595, Validators.required),
    WaterFRUnit: new FormControl('Kg/sec', Validators.required),
    Thi: new FormControl(127, Validators.required),
    Tho: new FormControl(100, Validators.required),
    Tci: new FormControl(30, Validators.required),
    Tco: new FormControl(47, Validators.required),
    Passes: new FormControl('2', Validators.required),
    TubeDiaO: new FormControl(0.03, Validators.required), //m
    TubeDiaI: new FormControl(0.025, Validators.required), //m
    B: new FormControl(0.340, Validators.required), //m
    C: new FormControl(0.460, Validators.required), //m
    ShellFluid: new FormControl('Water', Validators.required),
  });

  initialization() {
    this.h.isFeasible = false;
    if (this.ip.value.ShellFluid == 'Water') {

      var VegeOil: VOil = new VOil();
      var water: Water = new Water(Number(this.ip.value.Tci));
      VegeOil.getProperties(Number(this.ip.value.Thi));
      this.h.SFDensity = water.density;
      this.h.TFDensity = VegeOil.density;
      this.h.SFCond = water.k;
      this.h.TFCond = VegeOil.k;
      this.h.TFCp = VegeOil.cp;
      this.h.SFCp = water.cp;
      this.h.SFVisc = water.viscosity;
      this.h.TFVisc = VegeOil.viscosity;
      this.h.SFR = Number(this.ip.value.Waterflowrate);
      this.h.TFR = Number(this.ip.value.OilFlowRate);
    }
    else {
      var VegeOil: VOil = new VOil();
      var water: Water = new Water(Number(this.ip.value.Thi));
      VegeOil.getProperties(Number(this.ip.value.Tci));
      this.h.SFDensity = VegeOil.density;
      this.h.TFDensity = water.density;
      this.h.SFCond = VegeOil.k;
      this.h.TFCond = water.k;
      this.h.TFCp = water.cp;
      this.h.SFCp = VegeOil.cp;
      this.h.SFVisc = VegeOil.viscosity;
      this.h.TFVisc = water.viscosity;
      this.h.TFR = Number(this.ip.value.Waterflowrate);
      this.h.SFR = Number(this.ip.value.OilFlowRate);
    }
  }
  roundOff() {
    debugger;
    this.h.do= Number(this.h.do.toFixed(4));
    this.h.di= Number(this.h.do.toFixed(4));
    this.h.Lc = Number(this.h.Lc.toFixed(3));
    this.h.Vc = Number(this.h.Vc.toFixed(3));
    this.h.Va = Number(this.h.Va.toFixed(3));
    this.h.Vf = Number(this.h.Vf.toFixed(3));
    this.h.de = Number(this.h.de.toFixed(3));
    this.h.Gs = Number(this.h.Gs.toFixed(3));
    this.h.Vf = Number(this.h.Vf.toFixed(3));
    this.h.pitch = Number(this.h.pitch.toFixed(3));
    this.h.dh = Number(this.h.dh.toFixed(3));
    this.h.NReSs = Number(this.h.NReSs.toFixed(3));
    this.h.NPrSs = Number(this.h.NPrSs.toFixed(3));
    this.h.c = Number(this.h.c.toFixed(3));
    this.h.Ac = Number(this.h.Ac.toFixed(3));
    this.h.Vcoil = Number(this.h.Vcoil.toFixed(3));
    this.h.NReC = Number(this.h.NReC.toFixed(3));
    this.h.NPrC = Number(this.h.NPrC.toFixed(3));

    this.h.HAnn = Number(this.h.HAnn.toFixed(3));
    this.h.OverallHTCoeff = Number(this.h.OverallHTCoeff.toFixed(3));
    this.h.PDropSs = Number(this.h.PDropSs.toFixed(3));
    this.h.PDropTs = Number(this.h.PDropTs.toFixed(3));
    this.h.Aa = Number(this.h.Aa.toFixed(3));
    this.h.Van = Number(this.h.Van.toFixed(3));
    this.h.Hcoil = Number(this.h.Hcoil.toFixed(3));
    this.h.Hio = Number(this.h.Hio.toFixed(3));
    this.h.NDe = Number(this.h.NDe.toFixed(3));
    this.h.Hio = Number(this.h.Hio.toFixed(3));
    this.h.QFound= Number(this.h.QFound.toFixed(3));
    this.h.LtotalCoil= Number(this.h.LtotalCoil.toFixed(3));
    this.h.AreaFound= Number(this.h.AreaFound.toFixed(3));
    this.h.Hcyl= Number(this.h.Hcyl.toFixed(3));
  }
  HelicalCalc(): void {

    console.log("calculating");
    var Trectifier = 1;
    var Srectifier = 1;
    this.initialization();
    while (!this.h.isFeasible) {
      this.h.do = Number(this.ip.value.TubeDiaO);
      this.h.di = Number(this.ip.value.TubeDiaI);

      this.h.t = this.h.do - this.h.di;

      debugger;
      this.h.B = Number(this.ip.value.B);
      this.h.C = Number(this.ip.value.C);
      this.h.dh = (this.h.B + this.h.C) / 2;
      this.h.pitch = 1.5 * this.h.do;
      this.h.Lc = Math.sqrt(Math.pow(this.h.pitch, 2) + Math.pow((Math.PI * this.h.dh), 2));
      this.h.Vc = Math.PI * Math.pow(this.h.do, 2) * this.h.Lc / 4;
      this.h.Va = (Math.pow(this.h.C, 2) - Math.pow(this.h.B, 2)) * Math.PI * this.h.pitch / 4;
      this.h.Vf = this.h.Va - this.h.Vc;
      this.h.de = 4 * this.h.Vf / (Math.PI * this.h.Lc * this.h.do);
      var A = ((Math.pow(this.h.C, 2) - Math.pow(this.h.B, 2)) - (Math.pow(this.h.C - this.h.do, 2) - Math.pow(this.h.B + this.h.do, 2))) * Math.PI / 4;
      this.h.Gs = this.h.SFR / A;
      this.h.NReSs = this.h.Gs * this.h.de / this.h.SFVisc;
      this.h.NPrSs = this.h.SFCp * this.h.SFVisc / this.h.SFCond;
      this.h.c = (this.h.C - this.h.B) / 2 - (this.h.do) / 2;
      if (this.h.NReSs < 10000) {
        this.h.HAnn = (0.6 * Math.pow(this.h.NReSs, 0.5) * Math.pow(this.h.NPrSs, 0.31) * this.h.SFCond) / (this.h.de);
      }
      else {
        this.h.HAnn = (0.6 * Math.pow(this.h.NReSs, 0.5) * Math.pow(this.h.NPrSs, 0.31) * this.h.SFCond) / (this.h.de);
      }
      this.h.Ac = Math.PI * Math.pow(this.h.di, 2) / 4;
      this.h.Vcoil = Number(this.ip.value.OilFlowRate) / (this.h.TFDensity * this.h.Ac);
      this.h.NReC = (this.h.TFDensity * this.h.Vcoil * this.h.di) / this.h.TFVisc;
      this.h.NPrC = (this.h.TFCp * this.h.TFVisc) / this.h.TFCond;
      this.h.Aa = Math.PI * (this.h.C - this.h.B) / 4;
      this.h.Van = Number(this.ip.value.Waterflowrate) / (this.h.SFDensity * this.h.Aa);
      this.h.Hcoil = 110 * (this.h.SFCond / this.h.di) * Math.pow(this.h.NPrC, 0.333);
      // this.h.Hcoil = 0.023 * Math.pow(this.h.NReC,0.8) *Math.pow(this.h.NPrC,0.4);
      var hic = (1 + 3.5 * (this.h.di / this.h.dh)) * this.h.Hcoil;
      this.h.Hio = hic * (this.h.di / this.h.do);
      this.h.OverallHTCoeff = (1 / this.h.HAnn) + (1 / this.h.Hio) + (this.h.t / 14) + this.h.Rf + this.h.Ra;
      this.h.OverallHTCoeff = 1 / this.h.OverallHTCoeff;

      this.openSnackBar("Results have been calculated !! You can navigate to Results ", "Ok")
      this.h.isCalculated = true;
      // coil side calc
      this.h.NDe = this.h.NReC * Math.pow((this.h.di / this.h.do), 0.5);
      var Relroughness = this.absRoughness / this.h.di
      var fs = this.moodys(Relroughness, this.h.NReSs);
      var fc = fs / (1 - Math.pow(1 - Math.pow(11.6 / this.h.NDe, 0.45), 0.2));
      this.h.PDropSs = (8 * 0.0035 * this.h.c * 5 * this.h.SFDensity * Math.pow(this.h.Van, 2)) / (2 * this.h.de);
      this.h.PDropTs = 2 * fc * this.h.Lc * Math.pow(this.h.Vcoil, 2) * this.h.TFDensity / this.h.di;
      this.h.PDropTs = (this.h.PDropTs * 14.69) / 101325;
      if (this.h.PDropTs > 10) {
        Trectifier += 0.1
        this.ip.get("TubeDiaO")?.patchValue(Trectifier * Number(this.ip.value.TubeDiaO));
        this.ip.get("TubeDiaI")?.patchValue(Trectifier * Number(this.ip.value.TubeDiaI));
      }
      else {
        this.h.isFeasible = true;
      }
    }

    this.h.QFound = Math.abs((this.h.TFR) * this.h.TFCp * (Number(this.ip.value.Tho) - Number(this.ip.value.Thi)));
    var lmtd = this.getLmtd();
    this.h.AreaFound = this.h.QFound / (this.h.OverallHTCoeff * lmtd);
    this.h.N = Math.round(this.h.AreaFound / (Math.PI * this.h.do * this.h.Lc));
    this.h.LtotalCoil = this.h.N * this.h.Lc;

    this.h.Hcyl = this.h.N * this.h.pitch + this.h.do;
    console.log(this.h);
    if (Trectifier > 1) {
      this.ip.get("TubeDiaO")?.patchValue(Number(this.ip.value.TubeDiaO?.toFixed(5)));
      this.ip.get("TubeDiaI")?.patchValue(Number(this.ip.value.TubeDiaI?.toFixed(5)));

      alert('Tube Pressure was high , therfore the Diameter of the coil is increased Di :' + this.h.di + ' Do ' + this.h.do)

    }
    this.roundOff();
  }

  getLmtd(): number {
    debugger;
    const delT2 = Number(this.ip.value.Tho) - Number(this.ip.value.Tci);

    const delT1 = Number(this.ip.value.Thi) - Number(this.ip.value.Tco);

    this.h.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
    this.h.lmtd = Number(this.h.lmtd.toFixed(3));
    return this.h.lmtd;
  }
  onSubmit() {
    if (this.ip.invalid) {
      this.ip.markAllAsTouched();
      return;
    }
    if (Number(this.ip.value.Tci) >= Number(this.ip.value.Thi)) {
      alert('Cold Fluid inlet temperature should not be higher than Hot Fluid Temperature')
      this.h.isValid = false;
    }
    else {

      this.h.isValid = true;
      this.HelicalCalc();
      this.roundOff();
    }

  }

  moodys(r: number, Re: number): number {
    if (r <= 0.0001) {
      if (Re <= 1000) {
        return 0.065
      }
      else if (Re <= 10000) {
        return 0.025
      }
      else if (Re <= 100000) {
        return 0.0175
      }
      else {
        return 0.01
      }
    }
    else if (r <= 0.001) {
      if (Re <= 1000) {
        return 0.065
      }
      else if (Re <= 10000) {
        return 0.029
      }
      else if (Re <= 100000) {
        return 0.02
      }
      else {
        return 0.013
      }
    }
    else if (r <= 0.005) {
      if (Re <= 1000) {
        return 0.065
      }
      else if (Re <= 10000) {
        return 0.0465
      }

      else {
        return 0.03
      }
    }
    else if (r <= 0.001) {
      if (Re <= 1000) {
        return 0.065
      }
      else if (Re <= 10000) {
        return 0.0389
      }

      else {
        return 0.039
      }
    }
    else if (r <= 0.02) {
      if (Re <= 1000) {
        return 0.065
      }

      else {
        return 0.06
      }
    }
    else if (r <= 0.05) {
      if (Re <= 1000) {
        return 0.085
      }

      else {
        return 0.07
      }
    }
    return 0;
  }
}
