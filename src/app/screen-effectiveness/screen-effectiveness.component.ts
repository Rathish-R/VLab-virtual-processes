import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { batchKinetics } from '../batch-kinetics/Batch-Kinetics';
import { BatchKineticsComponent } from '../batch-kinetics/batch-kinetics.component';
import { HelicalCoilHEx } from '../helical-coil-hex/HelicalCoilHEx';
import { OpenPanEv } from '../open-pan-evaporator/OpenPanEvaporator';

@Component({
  selector: 'app-screen-effectiveness',
  templateUrl: './screen-effectiveness.component.html',
  styleUrls: ['./screen-effectiveness.component.css']
})
export class ScreenEffectivenessComponent {
  mesh: number[] = [4, 6, 8, 10, 14, 20, 28, 35, 48, 65, 100, 150, 200, -1];
  Dpi: number[] = [4.699, 3.327, 2.362, 1.651, 1.168, 0.833, 0.589, 0.417, 0.295, 0.208, 0.147, 0.104, 0.074];
Selected : number[]=[]// 0 -xf , 1 - xd ,2 - xb
  xfTotal = 0;
  xf: number[] = [];
  xfCum: number[] = [];
  xD: number[] = [];
  xB: number[] = [];
  df :number=0;
  bf :number=0;
  log: any = [{
  }]
  logs: any[] = [
  ];
  efficiency:number=0;
  isClickLabOn!: boolean;
  currCumXD!: number;
  selectedI !:number;
  isCalculated :boolean =false //index of the selected mesh
  ip = new FormGroup({
    Screen: new FormControl('28', Validators.required),
    xf: this.fb.array([Validators.required, Validators.min(0), Validators.max(1)]),
    mesh: this.fb.array([4, 6, 8, 10, 14, 20, 28, 35, 48, 65, 100, 150, 200, -1]), //14
    Dpi: this.fb.array([4.699, 3.327, 2.362, 1.651, 1.168, 0.833, 0.589, 0.417, 0.295, 0.208, 0.147, 0.104, 0.074]),
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
    this.isCalculated=false;
    this.isClickLabOn = true;
    this.selectedOperation = "Theory";
   
    this.currCumXD = 0;    this.addVolumeControls();
  }
  ngOnChanges(changes: SimpleChanges) {
    debugger;
    if (changes['ip'] && changes['ip'].currentValue) {
      const xfArray = this.ip.get('xf') as FormArray;
      debugger;
      this.xfTotal = xfArray.value.reduce((acc: number, curr: number) => acc + curr, 0);

      
      if (this.xfTotal > 1) {

        alert('fsdf');
        confirm("Mass fraction should not be greater than 1 , kindly reenter values ")
      }
    }
  }

  initialization() {
    debugger;
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
    if(xfc==1){
      this.isCalculated=true;
    }
   
    this.xfCum[index] = xfc;
    return xfc.toFixed(5);
  }

  addDetails(index: number, type: String) {
    debugger;
    this.selectedI = this.mesh.findIndex(item => item == this.getScreen());
    if (type == "xd") {
      var x = 0;
      if (index < this.selectedI) {
        x =  (index!=0)?Number(this.ip.value.xf!.at(index)) +  0.2 * Number(this.ip.value.xf!.at(index-1)):Number(this.ip.value.xf!.at(index))
      }
      else if (index == this.selectedI) {
        debugger;
        x =  (index!=0)?(Number(this.ip.value.xf!.at(index))*0.8) +  (0.2 * Number(this.ip.value.xf!.at(index-1)))+(0.2 * Number(this.ip.value.xf!.at(index))):0.8 *Number(this.ip.value.xf!.at(index))
      }
      else if (index > this.selectedI) {
        x = 0
      }
      this.xD[index] = Number(x.toFixed(5));
      if(index == this.xf.length-1){
        this.log['Cumulative XD'] = this.xD[index];
      }
    }
    else {
      var x = 0;
      if (index > this.selectedI) {
        x = Number(this.ip.value.xf!.at(index))
      }
      else if (index == this.selectedI) {
        x = 0.2 * Number(this.ip.value.xf!.at(index))
        this.Selected[0]=this.getCumXF(index);
      }
      else if (index < this.selectedI) {
        x = 0
      }
      this.xB[index] = Number(x.toFixed(5));
      if(index == this.xf.length-1){
        this.log['Cumulative XB'] = this.xB[index];
      }
    }

  }
  getCum(index: number, type: String) {
    if (type == 'xd') {
      let x = 0;
      for (let i = 0; i <= index; i++) {
        x += this.xD[i];
        if(i==this.selectedI){
          this.Selected[1]=x;
        }
      }
      // this.xD[index] = x;
      
      return x.toFixed(5);
    }
    else {
      let x = 0;
      for (let i = 0; i <= index; i++) {
        x += this.xB[i];
        if(i==this.selectedI){
          this.Selected[2]=x;
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
  calculateDbyF(){
    this.df=(this.Selected[0]-this.Selected[2])/(this.Selected[1]-this.Selected[2])
  }
  calculateBbyF(){
    debugger;
    this.bf=Math.abs((this.Selected[0]-this.Selected[1])/(this.Selected[2]-this.Selected[1]))
  }
  calculateEfficiency(){
    if(this.xf[13]!=1){
      this.isCalculated=false;
    }
    this.calculateDbyF();

    this.calculateBbyF();
var ea = this.df*(this.Selected[1])/(this.Selected[0]);
var eb = this.bf*(1-this.Selected[2])/(1-this.Selected[0]);
console.log(this.Selected);
this.efficiency=ea*eb*100;
this.df= Number(this.df.toFixed(3));
this.bf= Number(this.bf.toFixed(3));
this.efficiency= Number(this.efficiency.toFixed(3));
debugger;

this.log['Screen'] = Number(this.ip.value.Screen);
this.log['Ea'] =ea;
this.log['Eb'] =eb;
this.log['efficiency'] =this.efficiency;

this.logs.push(this.log);
this.log = [];

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
    this.calculateEfficiency();
    
this.isCalculated=true;
    if (this.ip.valid) {

    }
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

