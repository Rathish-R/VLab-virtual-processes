import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HelicalCoilHEx } from '../helical-coil-hex/HelicalCoilHEx';
import { Methanol } from '../methanol';
import { Water } from '../water';
import { OpenPanEv } from './OpenPanEvaporator';

@Component({
  selector: 'app-open-pan-evaporator',
  templateUrl: './open-pan-evaporator.component.html',
  styleUrls: ['./open-pan-evaporator.component.css']
})
export class OpenPanEvaporatorComponent {
  isClickLabOn!: boolean;
  equipments!: string[];
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  
  o:OpenPanEv = new OpenPanEv();
  // s: ShellAndTube = new ShellAndTube();
  h:HelicalCoilHEx=new HelicalCoilHEx();



  @Input() selected!: string;
  @Input() selectedOperation!: string;


  //Properties of water at 28.7°C: [Shell side]



  
  OVisc:number= 0.037 ;//Pa·s
  Ok:number= 0.135 ; //W/(m·K)
 ONpr:number= 5.35;
  ODensity:number=918 ;//kg/m³
  OCp:number=  2040 ; //J/(kg·K)

  ngOnInit() {
    this.selected = "Shell and Tube Heat Exchanger";
    this.equipments = [
      "Shell and Tube Heat Exchanger", "Double Pipe Heat Exchanger", "Jacketed Vessel"
    ];
    this.isClickLabOn = true;
    this.selectedOperation = "Theory";
    this.ResultObt = false;
    this.isTheoryOn = true;
    this.o.mass1=1000 ;
    this.o.mass2=1000; 
    this.o.ConcDs=60; // percent
    this.o.steamPressure = 1.2 // bar - gauge P
    this.o.HTCoeff=2000 //W/m2k
    this.o.BPEleConst=0.0075 ;
    this.o.Cpmix=3.7 //kJ/kg.K
    this.o.LatHeatSteam=2017 
    this.o.LatHeatWater=2256 
    this.o.EVRate_A=0.5 //kg/m².hr
    this.o.LiqDethEv=0.4 //m


  }
  
  ip = new FormGroup({
    MassSlt : new FormControl(1000, Validators.required),
    MassSlvnt: new FormControl(1000, Validators.required),
    ConcDs: new FormControl(60, Validators.required),
    HeatTransferCoeffAssumed: new FormControl(500, Validators.required),
    OilFlowRate: new FormControl(27.7, Validators.required),
    OilFRUnit: new FormControl('Kg/sec', Validators.required),
    Waterflowrate: new FormControl(69, Validators.required),
    WaterFRUnit: new FormControl('Kg/sec', Validators.required),
    Thi: new FormControl(95, Validators.required),
    Tho: new FormControl(40, Validators.required),
    Tci: new FormControl(25, Validators.required),
    Tco: new FormControl(40, Validators.required),
    Passes: new FormControl('2', Validators.required),
    // TubeLength: new FormControl('', Validators.required),
    TubeDiaO: new FormControl(0.0127, Validators.required), //m
    TubeDiaI: new FormControl(0.0102, Validators.required), //m

    ShellFluid: new FormControl('Methanol', Validators.required),
  });

  initialization() {
    debugger;
    this.o.mass1=Number(this.ip.value.MassSlt);
    this.o.mass2=Number(this.ip.value.MassSlvnt);
    this.o.ConcDs=Number(this.ip.value.ConcDs);
    var Solteamount = this.o.mass1*this.o.ConcDs/100;
    var Solventamount = this.o.mass2*(100- this.o.ConcDs)/100;
    var TBPElevation =this.o.BPEleConst * Solteamount;
    this.o.BPFeed = 100 +TBPElevation;
    var EvapTemp = 150 - this.o.BPFeed ;
    this.o.HDutyWater =Solventamount * 3.17 *EvapTemp
    this.o.HDutySugar =Solventamount * 1.5 *EvapTemp
    this.o.HeatDuty =this.o.HDutySugar +  this.o.HDutyWater;
    //req  heat  duty
    var methanol: Methanol = new Methanol();
    var water: Water = new Water(100);
    // flowrates


  }
  roundOff() {
    this.h.HtArea = Number(this.h.HtArea.toFixed(3));
    this.h.BundleDia = Number(this.h.BundleDia.toFixed(3));
    this.h.TubesPerPass = Number(this.h.TubesPerPass.toFixed(3));
    this.h.HtubeSide = Number(this.h.HtubeSide.toFixed(3));
    this.h.BaffleSpace = Number(this.h.BaffleSpace.toFixed(3));
    this.h.FlowAreaOfTubes =Number(this.h.FlowAreaOfTubes.toFixed(3));
    this.h.VelocityTubeSide = Number(this.h.VelocityTubeSide.toFixed(3));
    this.h.VelocityShellSide = Number(this.h.VelocityShellSide.toFixed(3));
    this.h.pitch = Number(this.h.pitch.toFixed(3));
    this.h.ShellDia = Number(this.h.ShellDia.toFixed(3));
    this.h.HShellSide = Number(this.h.HShellSide.toFixed(3));
    this.h.OverallHTCoeff = Number(this.h.OverallHTCoeff.toFixed(3));
    this.h.PDropSs = Number(this.h.PDropSs.toFixed(3));
    this.h.PDropTs = Number(this.h.PDropTs.toFixed(3));
    this.h.QFound = Number(this.h.QFound.toFixed(3));
    this.h.Tco= Number(this.h.Tco.toFixed(1));
    this.h.Tho= Number(this.h.Tho.toFixed(1));

  }
  ShellSideCalc(): void {
    console.log("calculating");
    this.initialization();
    this.h.do=Number(this.ip.value.TubeDiaO);
    this.h.di=Number(this.ip.value.TubeDiaI);
    
  
    var rectifier = 1;
    this.h.dh=this.h.do * 15;
    var r=this.h.dh/2;  //Helix rasiius
    this.h.B= this.h.dh - this.h.do;
    this.h.C= this.h.dh + this.h.do;
    this.h.pitch=1.5 * this.h.dh + this.h.do;
    this.h.Lc=this.h.pitch + (2*Math.PI* r);
    this.h.Vc=Math.PI * Math.pow(this.h.do,2) * this.h.Lc/4;
    this.h.Va= Math.PI * (Math.pow(this.h.DoCylinder,2) - Math.pow(this.h.DiCylinder,2)) * this.h.pitch/4;
    this.h.Vf= this.h.Va- this.h.Vc;
    while (!this.h.isFeasible) {
      console.log("rectifier" + rectifier);

      const Di = Number(this.ip.value.TubeDiaI);
      const Do = Number(this.ip.value.TubeDiaO);
      const U: number = Number(this.ip.value.HeatTransferCoeffAssumed)   // W/m2oC
      var delT = Number(this.ip.value.Thi) - Number(this.ip.value.Tho);
      delT = Number(delT.toFixed(3))//oC
      this.h.QShellSide = Number(this.ip.value.OilFlowRate) * delT * this.h.SFCp; // W
      this.h.HtArea = (this.h.QShellSide) / (U * this.getLmtd()); //m2 

      //surface Area of one tube
      var sATUbe = Math.PI * Do * (5 - 2 * (0.025));
      this.h.Tubes = Math.round(this.h.HtArea / sATUbe);

      if (this.ip.value.Passes == '2') {
        var k1 = 0.249;
        var n1 = 2.207;
        this.h.BundleDia = Do * Math.pow((this.h.Tubes / k1), (1 / n1));

      }
      debugger;
      this.h.ShellDia = this.h.BundleDia + 0.068;
      this.h.TubesPerPass = ((this.h.Tubes) / Number(this.ip.value.Passes));
      this.h.FlowAreaOfTubes = this.h.TubesPerPass * (Math.PI * Math.pow(Di, 2) / 4);
      this.h.VelocityTubeSide = this.h.TFR / (this.h.FlowAreaOfTubes * this.h.TFDensity);
      this.h.NReTs = (this.h.TFDensity * this.h.VelocityTubeSide * Di) / this.h.TFVisc;

      this.h.NPrTs = Number(this.h.TFCp * this.h.TFVisc) / this.h.TFCond;
      this.h.HtubeSide = 0;
      this.h.BaffleSpace = (this.h.ShellDia / 5) * rectifier;
      this.h.pitch = 1.25 * Number(this.ip.value.TubeDiaO);
      this.h.AreaShell = this.h.ShellDia * this.h.BaffleSpace * ((this.h.pitch) - Do) / this.h.pitch
      this.h.VelocityShellSide = this.h.SFR / (this.h.AreaShell * Number(this.h.SFDensity));
      const De = (Math.pow(this.h.pitch, 2) - (0.917 * Math.pow(Do, 2))) / Do;

      this.h.NReSs = (this.h.SFDensity * this.h.VelocityShellSide * De) / this.h.TFVisc;
      this.h.NPrSs = Number(this.h.SFCp * this.h.SFVisc) / this.h.SFCond;
      this.h.HShellSide = 0;

      this.h.OverallHTCoeff = (1 / this.h.HShellSide) + (1 / 5000) + (Do / (Di * 5000)) + (Do / (Di * this.h.HtubeSide)) + (Do * Math.log(Do / Di) / (2 * 50));
      this.h.OverallHTCoeff=1/this.h.OverallHTCoeff;
      this.h.PDropTs = 0;
      this.h.PDropSs = 0;
      this.h.PDropTs = (this.h.PDropTs * 14.69) / 101325;
      this.h.PDropSs = (this.h.PDropSs * 14.69) / 101325;
      debugger;
      var ActualArea=Math.PI*Math.pow(this.h.ShellDia/2 , 2);
      this.h.QFound= this.h.OverallHTCoeff * this.h.HtArea * this.h.lmtd;
      this.h.Tho =Number(this.ip.value.Thi) -  (this.h.QFound/ (this.h.SFR*this.h.SFCp) );
      this.h.Tco =Number(this.ip.value.Tci) - ( this.h.QFound/ (this.h.TFR*this.h.TFCp) );

      this.roundOff();
      this.h.isCalculated = true;
      if (this.h.PDropTs > 10 || this.h.PDropSs > 10) {
        this.h.isFeasible = false;
        rectifier += 0.2;
      }
      else {
        this.h.isFeasible = true;
        this.selectedOperation = "Result";
      }

    }
    console.log(this.h);
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
      this.ShellSideCalc();
    }

  }
}
