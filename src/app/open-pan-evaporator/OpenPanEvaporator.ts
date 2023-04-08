export class OpenPanEv {

    isCalculated: boolean = false;
ConcDs ! : number; // desired concentration
    mass1!: number;
    mass2!: number;
    steamPressure ! :number; // bar - gauge P
    HTCoeff ! : number;
    BPEleConst!:number; // boiling point elevation constant
    Cpmix !:number;
    LatHeatWater ! : number //latent heat of vapourisation water
    LatHeatSteam !:number //latent heat of vapourisation steam
    EVRate_A ! : number // Evaporation rate allowable
    LiqDethEv ! : number ;// liquid depth in evap
     
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