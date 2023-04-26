export class VCondenser {

    isCalculated: boolean = false;

    SFR!: number;
    TFR!: number;
    SFDensity!: number; //kg/m3
    TFDensity!: number; //kg/m3
    SFVisc!: number; //N/sm2
    TFVisc!: number;//N/sm2
    SFCond!: number; // W/moC
    TFCond!: number; // W/moC

    Jh: number = 0.0035;
    Jf: number = 0.004;
    TubeSheetThick: number = 0.025;
    
    lmtd !: number;
    HtArea!: number;
    QShellSide!: number;
    TFCp!: number;
    SFCp!: number;


    BundleDia !: number;
    ShellDia!: number;
    FlowAreaOfTubes!: number;
    TubesPerPass!: number;
    VelocityTubeSide!: number;
    VelocityShellSide!: number;
    NReTs!: number;
    NReSs!: number;
    NPrSs!: number;
    HtubeSide!: number;
    HTubeBundle!: number;
    isFeasible: boolean=false;
    HShellSide!: number;
    NPrTs!: number;
   
    BaffleSpace!: number;
    pitch!: number;
    AreaShell!: number;
    OverallHTCoeff!: number;
    PDropTs!: number;
    PDropSs!: number;
    Tubes!: number;
  isValid!: boolean;
TubesC!:number;
  QFound!:number;
  Tco!:number;
  Tho!:number;
  Thi!:number;
  Tci!:number;
  TubeLoading!:number;
  AssumedU!:number;
}