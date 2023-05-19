import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Annulus } from '../annulus-pipe/Annulus';
import { Water } from '../water';
import { CyclonSep } from './CycloneSeparator';
@Component({
  selector: 'app-cyclone-separator',
  templateUrl: './cyclone-separator.component.html',
  styleUrls: ['./cyclone-separator.component.css']
})
export class CycloneSeparatorComponent {
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
  s: CyclonSep = new CyclonSep();
  @Input() selected!: string;
  @Input() selectedOperation!: string;


  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";

    this.isClickLabOn = true;
  }

  ip = new FormGroup({

    gasflowrate: new FormControl(50, Validators.required),
    gasFRUnit: new FormControl('m3/hr', Validators.required),
    L: new FormControl(5, Validators.required),//pipe length
    Dp: new FormControl(0.1, Validators.required), //m

  });

  water!: Water;
  initialization() {
    debugger;
    this.s.isFeasible = false;
    this.s.Q = Number(this.ip.value.gasflowrate);
    this.s.k = 0.75;
    this.s.n=0.8;
    this.s.Dp = Number(this.ip.value.Dp);
    this.s.ViscG = 0.023;

    this.s.DensityP = 2500;
    // this.s.Cond = this.water.k;
    // this.s.Cp = this.water.cp;

    this.s.Flowrate = Number(this.ip.value.gasflowrate);

  }
  roundOff() {

    this.s.Velocity = Number(this.s.Velocity.toFixed(5));

    // this.s.HShellSide = Number(this.s.HShellSide.toFixed(3));
    // this.s.OverallHTCoeff = Number(this.s.OverallHTCoeff.toFixed(3));
    this.s.PDrop = Number(this.s.PDrop.toFixed(3));

  }
  Calc(): void {
    console.log("calculating");
    this.initialization();

    this.s.DensityP = 2500; //kg/m3
    this.s.Bc = 25;

    this.s.Dc = (4 * this.s.Q) / (Math.PI * this.s.v * this.s.DensityP * this.s.n);
    this.s.Ac = Math.PI * (Math.pow(this.s.Dc, 2)) / 4;
    this.s.u = 4 * this.s.Q / (Math.pow(this.s.Dc, 2));
    this.s.v = this.s.u * this.s.k;
    this.s.Lc = (this.s.Dc / 2) * (1.2 - (0.2 * this.s.Bc));
    this.s.Dvf = this.s.Dc / 2;
    this.s.Lvf = 3 * this.s.Dvf;
    this.s.Ds = 0.15 * this.s.Dc;
    this.s.Ls = 2 * this.s.Ds;
    this.s.DelP = (Math.pow(this.s.v, 2) * this.s.DensityG * 9.81) + (Math.pow(this.s.v, 2) * this.s.n * this.s.DensityP) / 2;
    this.s.NStk = (2 * this.s.DensityP * Math.pow(this.s.Dp, 2) * this.s.u) / (9 * this.s.ViscG * 9.81 * this.s.Lc);
    this.s.Dcp = this.s.k * this.s.Dc / Math.sqrt(this.s.NStk);
    this.s.Bfact = this.s.DelP / (this.s.DensityG * 9.81 * Math.pow(this.s.v, 2));
    this.s.nc = Math.pow((1 - Math.exp(-this.s.Bfact)), 1);
    this.s.C1 = 1 - (1.5 * (this.s.Dcp / this.s.Dc));
    this.s.C2 = 1 - (0.75 * (this.s.Dcp / this.s.Dc));

    // while (!this.s.isFeasible) {
    //   console.log("rectifier" + rectifier);

    //   if ( this.s.PDrop > 10) {
    //     this.s.isFeasible = false;
    //     rectifier += 0.2;
    //   }
    //   else {
    //     this.s.isFeasible = true;
    //   }

    // }


    // this.initialization(avg,avg);
    debugger;

    this.log['Dp'] = this.ip.value.Dp;
    this.log['Q'] = this.ip.value.gasflowrate;


    this.log['Delp'] = this.s.DelP;


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
    else{
      this.Calc();
    }
    this.Calc();
    

  }

}
