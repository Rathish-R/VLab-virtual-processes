import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { HelicalCoilHEx } from '../helical-coil-hex/HelicalCoilHEx';
import { Methanol } from '../methanol';
import { OpenPanEv } from '../open-pan-evaporator/OpenPanEvaporator';
import { Water } from '../water';
import { batchKinetics } from './Batch-Kinetics';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-batch-kinetics',
  templateUrl: './batch-kinetics.component.html',
  styleUrls: ['./batch-kinetics.component.css']
})
export class BatchKineticsComponent {
  isClickLabOn!: boolean;
  isStandardised: boolean = false;
  equipments!: string[];
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  nums: number[] = [];
  NaOHNorm!:number;
  HClNorm!:number;
  OxAcdNorm!:number;
  currTime: number = 0;
  o: OpenPanEv = new OpenPanEv();
  b: batchKinetics = new batchKinetics();
  ip = new FormGroup({
    OxAcidNorm: new FormControl(0.1, [Validators.max(0.5), Validators.min(0.01)]),
    NaOhNorm: new FormControl(0.05, [Validators.max(0.5), Validators.min(0.0001)]),
    rows: new FormControl(10, [Validators.max(15), Validators.min(5)]),
    VolHcl: new FormControl(10, [Validators.required, Validators.max(10), Validators.min(5)]),
    VolNaOh1: new FormControl(10, [Validators.required, Validators.max(30), Validators.min(5)]),
    VolNaOh2: new FormControl(10, [Validators.required, Validators.max(30), Validators.min(5)]),
    VolOxAcd: new FormControl(10, [Validators.required, Validators.max(10), Validators.min(5)]),
    HclNorm: new FormControl(10, [Validators.required, Validators.max(10), Validators.min(5)]),
    interval: new FormControl('60 sec', Validators.required),
    volumes: this.fb.array([]),

  });

  Va = 500 //ml
  Vb = 500 //ml

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

    this.isClickLabOn = true;
    this.selectedOperation = "Theory";
    this.ResultObt = false;
    this.isTheoryOn = true;


  }
  // form = this.fb.group({
  //   rows: ['', Validators.required],
  //   volumes: this.fb.array([])
  // });

  initialization() {
    debugger;
  }
  getHClNorm(){
this.HClNorm=Number(this.ip.value.VolNaOh2) *  this.NaOHNorm/Number(this.ip.value.VolHcl);
return this.HClNorm;
 
  }
  getNaOHNorm(){
    this.NaOHNorm= Number(this.ip.value.VolOxAcd) *  Number(this.ip.value.OxAcidNorm)/Number(this.ip.value.VolNaOh1)
  return this.NaOHNorm;
  }


  onSubmit() {
    if (this.ip.valid) {
      const num = this.ip.value.rows;

      this.nums = Array(num).fill(0).map((x, i) => i + 1);
      this.b.cao = Number(this.ip.value.NaOhNorm) * this.Va / (this.Va + this.Vb)
      this.b.cbo = Number(this.ip.value.OxAcidNorm) * this.Vb / (this.Va + this.Vb)
      this.b.m= (this.b.cbo /this.b.cao >= 1)? (this.b.cbo /this.b.cao  ):(this.b.cao /this.b.cbo) 

      this.addVolumeControls();
    }
  }
  getXa(index: number): number {
    const volumes = this.ip.controls.volumes as FormArray;
    const volume = volumes.at(index).value || 0;
    const Ca = (10.8 - volume) * Number(this.ip.value.NaOhNorm) / 10;
    const Cao = 0.03;
    return 1 - (Ca / Cao);
  }
  getLn(i :number){
    const xa :number=this.getXa(i);
    
    var ln : number = Math.log((this.b.m - xa)/((this.b.cao)*(1 -xa)));
return ln;
  }
  addVolumeControls() {
    const volumes = this.ip.controls.volumes as FormArray;
    volumes.clear();
    for (let i = 0; i < this.nums.length; i++) {
      volumes.push(this.fb.control(''));
    }
  }
  getVolume(row: number): number {
    const volumes = this.ip.controls.volumes as FormArray;
    const index = row - 1;
    const control = volumes.controls[index];
    return control.value ? control.value : 0;
  }
  getTime(index: number): number {
    const time = (index + 1) * 60;
    return time;
  }
}
