import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BatchKineticsComponent } from '../batch-kinetics/batch-kinetics.component';
import { HelicalCoilHEx } from '../helical-coil-hex/HelicalCoilHEx';
import { RollCruser } from './RollCrusher';

@Component({
  selector: 'app-roll-crusher',
  templateUrl: './roll-crusher.component.html',
  styleUrls: ['./roll-crusher.component.css']
})
export class RollCrusherComponent {
  mesh: number[] = [4, 6, 8, 10, 14, 20, 28, 35, 48, 65, 100, 150, 200, -1];
  Dpi: number[] = [4.699, 3.327, 2.362, 1.651, 1.168, 0.833, 0.589, 0.417, 0.295, 0.208, 0.147, 0.104, 0.074,0];
  Selected: number[] = []// 0 -xf , 1 - xd ,2 - xb
  xfTotal = 0;
  xfCum: number[] = [];
  xf: number[] = [];
  Dsb: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  xD: number[] = [];
  xB: number[] = [];
  df: number = 0;
  bf: number = 0;
  efficiency: number = 0;
  isClickLabOn!: boolean;
  currCumXD!: number;
  selectedI !: number;
  s: RollCruser = new RollCruser();

  isCalculated: boolean = false //index of the selected mesh
  ip = new FormGroup({
    // L: new FormControl('28', Validators.required), // Length between the rolls 
    DR: new FormControl('0.12', Validators.required),//Diameter of Roll
    Dfmx: new FormControl('0.008', Validators.required), // max Feed Dia allowable
    N: new FormControl('280', Validators.required),// Speed of the roll 
    Material: new FormControl('LimeStone', Validators.required),// material to be crushed
    NipAngle: new FormControl('25', [Validators.required, Validators.min(0)]),
    Screen: new FormControl('28', Validators.required),
    xf: this.fb.array([Validators.required, Validators.min(0), Validators.max(1)]),
    Mfeed: new FormControl('1', [Validators.required, Validators.min(0)]),//kg
    Crushtime: new FormControl('1', [Validators.required, Validators.min(0)]), //minutes
    mesh: this.fb.array([4, 6, 8, 10, 14, 20, 28, 35, 48, 65, 100, 150, 200, -1]), //14
    Dpi: this.fb.array([4.699, 3.327, 2.362, 1.651, 1.168, 0.833, 0.589, 0.417, 0.295, 0.208, 0.147, 0.104, 0.074 ,0]),
    // xf: this.fb.array([Validators.required,Validators.min(0),Validators.max(1)]),
    column4: this.fb.array([])

  });



  // s: ShellAndTube = new ShellAndTube();
  h: HelicalCoilHEx = new HelicalCoilHEx();

  constructor(private fb: FormBuilder,
    private dialog: MatDialog) { }


  @Input() selected!: string;
  @Input() selectedOperation!: string;
  openDialog() {
    this.dialog.open(BatchKineticsComponent, {
      width: '250px',

    });
  }
  ngOnInit() {
    this.isCalculated = false;
    this.isClickLabOn = true;
    this.selectedOperation = "Theory";
    this.s.isCalculated = false;

    this.currCumXD = 0; this.addVolumeControls();
  }
  ngOnChanges(changes: SimpleChanges) {
    debugger;
    if (changes['ip'] && changes['ip'].currentValue) {
      const xfArray = this.ip.get('xf') as FormArray;
      debugger;
      this.xfTotal = xfArray.value.reduce((acc: number, curr: number) => acc + curr, 0);

      if (Number(this.ip.value.NipAngle) > 30) {
        const confirmed = window.confirm('The Entered Angle of nip exceeds the optimum level 30 degree , do you want to reset it to 30?');
        if (confirmed) {
          this.ip.controls.NipAngle.patchValue('30');
        }
      }
      if (this.xfTotal > 1) {

        alert('fsdf');
        confirm("Mass fraction should not be greater than 1 , kindly reenter values ")
      }
    }
  }
  reset(){
    this.xfCum=[];
    this.Dsb=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];;

  }

  initialization() {
    debugger;
    this.s.Dpmax = Number(this.ip.value.Dfmx);
    this.s.Dr = Number(this.ip.value.DR)
    this.s.NipAngle = Number(this.ip.value.NipAngle);
    var r = this.s.Dr / 2;
    var a =(this.s.Dpmax / 2) + r;
    var b=Math.cos(this.s.NipAngle)
    var c = (a*b)-r
    this.s.Lr = 2*c;
    this.s.Wr = 1.5 * this.s.Dr;
    this.s.LDens = 0.833; //tonnes/m3
    this.s.N=Number(this.ip.value.N);
    this.s.Qtheo = 60 * Math.PI * this.s.Wr * this.s.Dr * this.s.N * this.s.Lr * this.s.LDens;
    this.s.Qact = this.s.Qtheo * 0.75;   //tones /hr
    this.s.Wi = 7;

    this.s.P = this.s.Qact * this.s.Wi * ( this.s.Dpmax /this.s.Lr);
    this.s.CrushTime = Number(this.ip.value.Crushtime);
    this.s.Feedmass = Number(this.ip.value.Mfeed);
    this.s.Mfr =( this.s.CrushTime*60) / (this.s.Feedmass*1000);
    this.s.kb = 0.3162 * this.s.Wi;

  }
  getDsb(index: number): any {

    return this.Dsb[index].toFixed(5);
  }

  addDetails(index: number, type: String) {
    debugger;
    this.selectedI = this.mesh.findIndex(item => item == this.getScreen());
    if (type == "xd") {
      var x = 0;
      if (index < this.selectedI) {
        x = Number(this.ip.value.xf!.at(index))
      }
      else if (index == this.selectedI) {
        x = 0.8 * Number(this.ip.value.xf!.at(index))
      }
      else if (index > this.selectedI) {
        x = 0
      }
      this.xD[index] = Number(x.toFixed(5));
    }
    else {
      // var i = this.mesh.findIndex(item => item == this.getScreen());
      // console.log(i);
      var x = 0;
      if (index > this.selectedI) {
        x = Number(this.ip.value.xf!.at(index))
      }
      else if (index == this.selectedI) {
        x = 0.2 * Number(this.ip.value.xf!.at(index))
        this.Selected[0] = this.getDsb(index);
      }
      else if (index < this.selectedI) {
        x = 0
      }
      this.xB[index] = Number(x.toFixed(5));
    }

  }
  getCumXF(index: number): any {
    let xfc = 0;
    for (let i = 0; i <= index; i++) {
      xfc += Number(this.ip.value.xf!.at(i));
      if (xfc > 1) {
        const confirmed = window.confirm('The mass fraction value Xf is above 1. Do you want to reset it to 0?');
        if (confirmed) {
          this.ip.controls.xf.controls[i].reset();
        }
        return ;
      }
    }
   
    this.xfCum[index] = xfc;
    return xfc.toFixed(5);
  }
  getCum(index: number, type: String) {
    if (type == 'xd') {
      let x = 0;
      for (let i = 0; i <= index; i++) {
        x += this.xD[i];
        if (i == this.selectedI) {
          this.Selected[1] = x;
        }
      }
      // this.xD[index] = x;

      return x.toFixed(5);
    }
    else {
      let x = 0;
      for (let i = 0; i <= index; i++) {
        x += this.xB[i];
        if (i == this.selectedI) {
          this.Selected[2] = x;
        }
      }
      // this.xB[index] = x;
      return x.toFixed(5);
    }


  }
  getCumXD(index: number): any {
    this.addDetails(index, "xd");

    return this.getCum(index, "xd");
  }
  getCumXB(index: number): any {
    debugger;
    this.addDetails(index, "xb");

    return this.getCum(index, "xb");

  }
  getScreen() {
    return Number(this.ip.value.Screen)
  }
  getmesh(ind: number): any {
    return this.ip.value.mesh?.at(ind);
  }
  getDpi(ind: number): any {
    return this.ip.value.Dpi?.at(ind);
  }
  assignDsb(value: number, i: number) {
    var j = i;
    while (value < this.Dpi[j] && j != this.Dpi.length-1) {
      j++;
    }
    this.Dsb[j] =this.Dsb[j]+ Number(this.ip.value.xf!.at(i));
  }
  calculateDsb(i: number) {
    debugger;
    var v1 = (this.s.P / (this.s.Mfr * this.s.kb));
    var v2 = Math.pow(Number(this.Dpi[i]), -(1 / 2));

    var value = Math.pow((v1 + v2), -2);
    console.log(value);
    this.assignDsb(value, i);

  }
  CalculateProductOutlet() {
    this.initialization();
    
    for (var i = 0; i < this.Dsb.length; i++) {
      this.calculateDsb(i);
    }
  
  }

  // 

  calculateValue(row: any): number {
    const column1Value = row.controls.column1.value;
    const column2Value = row.controls.column2.value;
    const column3Value = row.controls.column3.value;

    if (!column3Value) {
      return 0;
    }

    return column1Value + column2Value + +column3Value;
  }

  onSubmit() {
    this.reset();
    if (Number(this.ip.value.NipAngle) > 30) {
      const confirmed = window.confirm('The Entered Angle of nip exceeds the optimum level 30 degree , do you want to reset it to 30?');
      if (confirmed) {
        this.ip.controls.NipAngle.patchValue('30');
      }
    }


    this.isCalculated = true;
    if (this.ip.valid) {

      this.CalculateProductOutlet();
    }
    // this.reset() ;
  }
  addVolumeControls() {
    const xf = this.ip.controls.xf as FormArray;
    xf.clear();
    for (let i = 0; i < this.mesh.length; i++) {
      xf.push(this.fb.control(0));
    }
  }
  getVolume(row: number): number {
    const volumes = this.ip.controls.xf as FormArray;
    const index = row - 1;
    const control = volumes.controls[index];
    return control.value ? control.value : 0;
  }
  getTime(index: number): number {
    const time = (index + 1) * 60;
    return time;
  }



}

