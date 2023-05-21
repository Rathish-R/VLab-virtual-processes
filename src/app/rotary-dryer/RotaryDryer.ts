export class Rotary {
FR ! : number; //Feed Flow rate
Tfi ! : number ; // Feed inlet Temperature 
Tfo ! : number ; // Feed outlt Temperature 
ms ! : number ; // weight if bone dried solid  // Kg
mm ! :number ; // amount of moisture // kg
w1 !:number ; // initial moisture
w2 ! : number ;// fianl moisture

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

  QFound!:number;
  Tco!:number;
  Tho!:number;
}