import { Component, Input ,OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-distillation',
  templateUrl: './simple-distillation.component.html',
  styleUrls: ['./simple-distillation.component.css']
})
export class SimpleDistillationComponent {
  molWtA=60.1;
  molWtB=18;

  bottleW!:number;
  feedBSW!:number;
  distBSW!:number;
  residBSW!:number;
  feedDens!:number;
  distDens!:number;
  residDens!:number;
  compA!:number;
  compB!:number;
  moleFrA!:number;
  moleFrB!:number;
  isCalculated:boolean=false;
  @Input() selected!: string;
  @Input() selectedOperation!: string;
 
  iP = new FormGroup({
    compA: new FormControl(150, Validators.required), //in milliliter
    compB: new FormControl(150, Validators.required), //in milliliter
    bottleW: new FormControl(15, [Validators.required , Validators.max(20)]),
    feedBSW: new FormControl(25.3, Validators.required),
    distBSW: new FormControl(24.2, Validators.required),
    residBSW: new FormControl(24.7, Validators.required),
    feedSW: new FormControl(15, Validators.required),
    distV: new FormControl(90, Validators.required),
    residV: new FormControl(190, Validators.required),
    sampleVol: new FormControl(10, Validators.required), //
    FeedDens: new FormControl(10, Validators.required),


    OilFRUnit: new FormControl('Kg/sec', Validators.required),
    Waterflowrate: new FormControl(69, Validators.required),
    WaterFRUnit: new FormControl('Kg/sec', Validators.required),
    Thi: new FormControl(95, Validators.required),
    Tho: new FormControl(40, Validators.required),
    Tci: new FormControl(25, Validators.required),
    Tco: new FormControl(40, Validators.required),
    Passes: new FormControl('2', Validators.required),
    // TubeLength: new FormControl('', Validators.required),
    TubeDiaO: new FormControl(0.02, Validators.required), //m
    TubeDiaI: new FormControl(0.016, Validators.required), //m

    ShellFluid: new FormControl('Oil', Validators.required),
  });
Calculate(){
  this.bottleW=Number(this.iP.value.bottleW);
  this.feedBSW=Number(this.iP.value.feedBSW);
  this.distBSW=Number(this.iP.value.distBSW);
  this.residBSW=Number(this.iP.value.residBSW);
  this.feedDens=Number(((this.feedBSW-this.bottleW)/10).toFixed(2))
  this.distDens=Number(((this.distBSW-this.bottleW)/10).toFixed(2));
  this.residDens=Number(((this.residBSW-this.bottleW)/10).toFixed(2));
this.moleFrA=Number((this.molWtA/(this.molWtA+this.molWtB)).toFixed(2));
this.moleFrB=Number((this.molWtB/(this.molWtA+this.molWtB)).toFixed(2));
  this.compA=Number(this.iP.value.compA);
  this.compB=Number(this.iP.value.compB);
  this.isCalculated=true;
}

}
