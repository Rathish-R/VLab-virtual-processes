import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Methanol } from '../methanol';
import { ShellAndTube } from '../shell-and-tube/ShellAndTube';
import { Water } from '../water';
import { Annulus } from './Annulus';

@Component({
  selector: 'app-annulus-pipe',
  templateUrl: './annulus-pipe.component.html',
  styleUrls: ['./annulus-pipe.component.css']
})
export class AnnulusPipeComponent

{
  isClickLabOn!: boolean;
  equipments!: string[];
  isTheoryOn!: boolean;
  log: any = [{
  }]
  logs: any[] = [
  ];
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  s: Annulus = new Annulus();
  @Input() selected!: string;
  @Input() selectedOperation!: string;


  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";
   
    this.isClickLabOn = true;
  }

  ip = new FormGroup({
    Fluid: new FormControl('Water', Validators.required),
    Waterflowrate: new FormControl(50, Validators.required),
    WaterFRUnit: new FormControl('m3/hr', Validators.required),
    L: new FormControl(5, Validators.required),//pipe length
    Do: new FormControl(0.1, Validators.required), //m
    Di: new FormControl(0.05, Validators.required), //m
    Pi: new FormControl(4, Validators.required), // inlet Pressure - bar
    Po: new FormControl(3, Validators.required), //outlet pressure -bar
    HeatTransferCoeffAssumed: new FormControl(500, Validators.required),
    OilFlowRate: new FormControl(27.7, Validators.required),
    OilFRUnit: new FormControl('Kg/hr', Validators.required),
   
 

    Tci: new FormControl(25, Validators.required),
    Tco: new FormControl(40, Validators.required),
    Passes: new FormControl('2', Validators.required),
 

    ShellFluid: new FormControl('Methanol', Validators.required),
  });

  water!: Water;
  initialization() {
    debugger;
    this.s.isFeasible = false;
    this.water= new Water(30);
    this.s.Density = this.water.density;   
    this.s.Cond =  this.water.k;
    this.s.Cp = this.water.cp;
    this.s.Visc = this.water.viscosity;
    this.s.Flowrate = Number(this.ip.value.Waterflowrate);

  }
  roundOff() {

    this.s.Velocity = Number(this.s.Velocity.toFixed(5));

    // this.s.HShellSide = Number(this.s.HShellSide.toFixed(3));
    // this.s.OverallHTCoeff = Number(this.s.OverallHTCoeff.toFixed(3));
    this.s.PDrop = Number(this.s.PDrop.toFixed(3));

    // this.s.Tco = Number(this.s.Tco.toFixed(1));
    // this.s.Tho = Number(this.s.Tho.toFixed(1));

  }
  ShellSideCalc(): void {
    console.log("calculating");
    this.initialization();
    const Di = Number(this.ip.value.Di);
    const Do = Number(this.ip.value.Do)
    var A =Math.PI*(Math.pow(Do,2)-Math.pow(Di,2))/4;
    this.s.QPipe = A*this.s.Flowrate/3600;
    this.s.Velocity=this.s.QPipe/A;
    this.s.Dh= 4 * A / (Math.PI*(0.1+0.05));
    this.s.NRe= this.s.Density* this.s.Velocity*this.s.Dh/this.s.Visc;//-2 * Math.log10((0.05/this.s.Dh)/3.7 + 2.51/(Re√f))
    this.s.f=0.0278;
    this.s.PDrop =(this.s.f* Number(this.ip.value.L)*this.s.Density*Math.pow(this.s.Velocity,2))/(2*this.s.Dh);
    this.s.PDrop = (this.s.PDrop * 14.69) / 101325;

    //surface Area of one tube


    debugger;
   
    var rectifier = 1;
    this.s.isFeasible = true;
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
    this.s.isFeasible = true;
   
    // this.initialization(avg,avg);
    debugger;

    this.log['Mh'] = this.ip.value.OilFlowRate;
    this.log['Mc'] = this.ip.value.Waterflowrate;

    this.log['Thi'] = this.ip.value.Pi;
    this.log['Tho'] = this.s.Tho;
    this.log['Tci'] = this.ip.value.Tci;
    this.log['Tco'] = this.s.Tco;
    this.logs.push(this.log);
    this.log = [];
    this.roundOff();
    console.log(this.logs);
    console.log(this.s);

   this.openSnackBar("Results have been calculated !! You can navigate to Results " , "Ok")
    this.s.isCalculated = true;
  }

  getLmtd(): number {
    debugger;
    const delT2 = Number(this.ip.value.Po) - Number(this.ip.value.Tci);

    const delT1 = Number(this.ip.value.Pi) - Number(this.ip.value.Tco);

    this.s.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
    this.s.lmtd = Number(this.s.lmtd.toFixed(3));
    return this.s.lmtd;
  }
  onSubmit() {
    if (this.ip.invalid) {
      this.ip.markAllAsTouched();
      return;
    }
    if (Number(this.ip.value.Po) >= Number(this.ip.value.Pi)) {
      alert('Cold Fluid inlet temperature should not be higher than Hot Fluid Temperature')
      this.s.isValid = false;
    }
    else {

      this.s.isValid = true;
      this.ShellSideCalc();
    }

  }

}
