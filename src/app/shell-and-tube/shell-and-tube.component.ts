import { Component, Input, OnInit } from '@angular/core';
import { ShellAndTube } from './ShellAndTube';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Water } from '../water';
import { Methanol } from '../methanol';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-shell-and-tube',
  templateUrl: './shell-and-tube.component.html',
  styleUrls: ['./shell-and-tube.component.css']
})
export class ShellAndTubeComponent {
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
  s: ShellAndTube = new ShellAndTube();
  @Input() selected!: string;
  @Input() selectedOperation!: string;


  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";

    this.isClickLabOn = true;
  }

  ip = new FormGroup({
    HeatTransferCoeffAssumed: new FormControl(500, Validators.required),
    OilFlowRate: new FormControl(27.7, Validators.required),
    OilFRUnit: new FormControl('Kg/sec', Validators.required),
    Waterflowrate: new FormControl(69, Validators.required),
    WaterFRUnit: new FormControl('Kg/sec', Validators.required),
    L: new FormControl(5, Validators.required),
    Thi: new FormControl(95, Validators.required),
    Tho: new FormControl(40, Validators.required),
    Tci: new FormControl(25, Validators.required),
    Tco: new FormControl(40, Validators.required),
    Passes: new FormControl('2', Validators.required),
    TubeDiaO: new FormControl(0.02, Validators.required), //m
    TubeDiaI: new FormControl(0.016, Validators.required), //m

    ShellFluid: new FormControl('Methanol', Validators.required),
  });
  methanol: Methanol = new Methanol();
  water!: Water;
  initialization(th: number, tc: number) {
    this.s.isFeasible = false;
    this.methanol.getProperties(th);
    this.water= new Water(tc);
    if (this.ip.value.ShellFluid == "Methanol") {
      this.s.SFDensity = this.methanol.density;
      this.s.TFDensity = this.water.density;
      this.s.SFCond = this.methanol.k;
      this.s.TFCond = this.water.k;
      this.s.TFCp = this.water.cp;
      this.s.SFCp = this.methanol.cp;
      this.s.SFVisc = this.methanol.viscosity;
      this.s.TFVisc = this.water.viscosity;

      this.s.SFR = Number(this.ip.value.OilFlowRate);
      this.s.TFR = Number(this.ip.value.Waterflowrate);
    }
    else  {
      this.s.SFDensity = this.water.density;
      this.s.TFDensity = this.methanol.density;
      this.s.SFCond = this.water.k;
      this.s.TFCond = this.methanol.k;
      this.s.TFCp = this.methanol.cp;
      this.s.SFCp = this.water.cp;
      this.s.SFVisc = this.water.viscosity;
      this.s.TFVisc = this.methanol.viscosity;

      this.s.SFR = Number(this.ip.value.Waterflowrate);
      this.s.TFR = Number(this.ip.value.OilFlowRate);
    }
    // flowrates


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
    this.s.QFound = Number((this.s.QFound/1000).toFixed(3));
    this.s.Tco = Number(this.s.Tco.toFixed(1));
    this.s.Tho = Number(this.s.Tho.toFixed(1));
    this.s.QShellSide=Number((this.s.QShellSide/1000).toFixed(3));

  }
  ShellSideCalc(): void {
    debugger;
    console.log("calculating");
    this.initialization(Number(this.ip.value.Thi), Number(this.ip.value.Tci));
    const Di = Number(this.ip.value.TubeDiaI);
    const Do = Number(this.ip.value.TubeDiaO);
    const U: number = Number(this.ip.value.HeatTransferCoeffAssumed)   // W/m2oC
    var delT = Number(this.ip.value.Thi) - Number(this.ip.value.Tho);
    delT = Number(delT.toFixed(3))//oC
    this.s.QShellSide = (this.ip.value.ShellFluid=='Methanol')?Number(this.ip.value.OilFlowRate) * delT * this.s.SFCp : Number(this.ip.value.OilFlowRate) * delT * this.s.TFCp; // W
    this.s.HtArea = (this.s.QShellSide) / (U * this.getLmtd()*0.85); //m2 

    //surface Area of one tube
    var sATUbe = Math.PI * Do * (5 - 2 * (0.025));
    this.s.Tubes = Math.round(this.s.HtArea / sATUbe);
    if (this.ip.value.Passes == '2') {
      var k1 = 0.249;
      var n1 = 2.207;
      this.s.BundleDia = Do * Math.pow((this.s.Tubes / k1), (1 / n1));

    }
    else if (this.ip.value.Passes == '4') {
      var k1 = 0.158;
      var n1 = 2.263;
      this.s.BundleDia = Do * Math.pow((this.s.Tubes / k1), (1 / n1));
    }
    this.s.ShellDia = this.s.BundleDia + 0.068;
    this.s.TubesPerPass = ((this.s.Tubes) / Number(this.ip.value.Passes));
    this.s.FlowAreaOfTubes = this.s.TubesPerPass * (Math.PI * Math.pow(Di, 2) / 4);
    this.s.VelocityTubeSide = this.s.TFR / (this.s.FlowAreaOfTubes * this.s.TFDensity);
    this.s.NReTs = (this.s.TFDensity * this.s.VelocityTubeSide * Di) / this.s.TFVisc;

    this.s.NPrTs = Number(this.s.TFCp * this.s.TFVisc) / this.s.TFCond;
    this.s.HtubeSide = this.s.Jh * this.s.NReTs * Math.pow(this.s.NPrTs, 0.33) * (this.s.TFCond / Di);

    var rectifier = 1;
    while (!this.s.isFeasible) {
      console.log("rectifier" + rectifier);

      this.s.BaffleSpace = (this.s.ShellDia / 5) * rectifier;
      this.s.pitch = 1.25 * Number(this.ip.value.TubeDiaO);
      this.s.AreaShell = this.s.ShellDia * this.s.BaffleSpace * ((this.s.pitch) - Do) / this.s.pitch
      this.s.VelocityShellSide = this.s.SFR / (this.s.AreaShell * Number(this.s.SFDensity));
      const De = (Math.pow(this.s.pitch, 2) - (0.917 * Math.pow(Do, 2))) / Do;

      this.s.NReSs = (this.s.SFDensity * this.s.VelocityShellSide * De) / this.s.TFVisc;
      this.s.NPrSs = Number(this.s.SFCp * this.s.SFVisc) / this.s.SFCond;
      this.s.HShellSide = this.s.Jf * this.s.NReSs * Math.pow(this.s.NPrSs, 0.33) * (this.s.SFCond / Number(De));

      this.s.OverallHTCoeff = (1 / this.s.HShellSide) + (1 / 5000) + (Do / (Di * 5000)) + (Do / (Di * this.s.HtubeSide)) + (Do * Math.log(Do / Di) / (2 * 50));
      this.s.OverallHTCoeff = 1 / this.s.OverallHTCoeff;
      this.s.PDropTs = (this.s.TFDensity * Math.pow(this.s.VelocityTubeSide, 2) * Number(this.ip.value.Passes) / 2) * (8 * this.s.Jf * (5 - 2 * (0.025) / Di) + 2.5);
      this.s.PDropSs = (8 * this.s.Jh * this.s.ShellDia * (5 - 2 * (0.025)) * this.s.TFDensity * Math.pow(this.s.VelocityShellSide, 2)) / (2 * De * this.s.BaffleSpace);
      this.s.PDropTs = (this.s.PDropTs * 14.69) / 101325;
      this.s.PDropSs = (this.s.PDropSs * 14.69) / 101325;
      var ActualArea = Math.PI * 5 *this.s.TubesPerPass*  Number(this.ip.value.TubeDiaI)/2;
      console.log(ActualArea);
      this.s.QFound = this.s.OverallHTCoeff * ActualArea * this.s.lmtd;
      if (this.s.PDropTs > 10 || this.s.PDropSs > 10) {
        if(rectifier>5 ){
          if(this.s.PDropTs > 10){
            this.ip.get('TubeDiaI')!.patchValue(Number((Di +(0.1*Di).toFixed(4))));
            this.ip.get('TubeDiaO')!.patchValue(Number((Do +(0.1*Do).toFixed(4))));
            this.s.isValid = true;
            this.ShellSideCalc();
          }
          else{
            alert('The design is not feasible , Kindly Enter valid details');
            this.s.isValid = false;
          }
        }
        this.s.isFeasible = false;
        rectifier += 0.2;
      }
      else {
        this.s.isFeasible = true;
      }
      
    }
    var avg = (Number(this.ip.value.Thi) + Number(this.ip.value.Tci)) / 2;
    this.initialization(avg,avg);
    debugger;
    this.s.Tho = Number(this.ip.value.Thi) - (this.s.QFound / (this.s.SFR * this.s.SFCp));
    this.s.Tco = Number(this.ip.value.Tci) + (this.s.QFound / (this.s.TFR * this.s.TFCp));
    this.roundOff();
    this.log['Mh'] = Number(this.ip.value.OilFlowRate?.toFixed(3));
    this.log['Mc'] = Number(this.ip.value.Waterflowrate?.toFixed(3));

    this.log['Thi'] = Number(this.ip.value.Thi?.toFixed(3));
    this.log['Tho'] = this.s.Tho;
    this.log['Tci'] = Number(this.ip.value.Tci?.toFixed(3));
    this.log['Tco'] = this.s.Tco;
    this.logs.push(this.log);
    this.log = [];
    
    console.log(this.s);
   this.openSnackBar("Results have been calculated !! You can navigate to Results " , "Ok")
    this.s.isCalculated = true;
  }

  getLmtd(): number {
    debugger;
    const delT2 = Number(this.ip.value.Tho) - Number(this.ip.value.Tci);

    const delT1 = Number(this.ip.value.Thi) - Number(this.ip.value.Tco);

    this.s.lmtd = (delT1 - delT2) / (Math.log(delT1 / delT2));
    this.s.lmtd = Number(this.s.lmtd.toFixed(3));
    return this.s.lmtd;
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
      this.ShellSideCalc();
    }

  }

}