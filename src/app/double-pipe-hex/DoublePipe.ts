export class DoublePipeHEx {

    isCalculated: boolean = false;

    SFR!: number;
    TFR!: number;
    SFDensity!: number; //kg/m3
    TFDensity!: number; //kg/m3
    SFVisc!: number; //N/sm2
    TFVisc!: number;//N/sm2
    SFCond!: number; // W/moC
    TFCond!: number; // W/moC
di!: number;
do!: number;
de!: number;
da!:number;// annulus inside dia
    Jh: number = 0.0035;
    Jf: number = 0.004;
    TubeSheetThick: number = 0.025;
    HeatDuty!:number;
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
    NNuSs ! : number;
    NNuTs ! : number;
    HtubeSide!: number;
    isFeasible: boolean=false;
    HShellSide!: number;
    NPrTs!: number;
   foulingT!:number;
   foulingS!:number;

    BaffleSpace!: number;
    pitch!: number;
    FlowAreaAnnulus!: number;
    OverallHTCoeff!: number;
    PDropTs!: number;
    PDropSs!: number;
    Tubes!: number;
  isValid!: boolean;
Lhp ! : number;
Ahp ! : number;// ht area per hairpin
 Nhp !:number ; //number oh hairpin
  QFound!:number;
  Tco!:number;
  Tho!:number;
}