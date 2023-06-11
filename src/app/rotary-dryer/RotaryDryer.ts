export class Rotary {
FR ! : number; //Feed Flow rate
Tfi ! : number ; // Feed inlet Temperature 
Tfo ! : number ; // Feed outlt Temperature 
ms ! : number ; // weight if bone dried solid  // Kg
mm ! :number ; // amount of moisture // kg
w1 !:number ; // initial moisture
w2 ! : number ;// fianl moisture
TAi ! : number;// outlet air temperature 
TAo ! : number;// outlet air temperature 
Tw ! : number;// wet bulb temperature
Td! : number;// dry bulb temperature
Humidity!: number;// HUmidity
Cps !: number;// specific heat of solid 
Cpv!:number;// specific heat of vapour
HumidHeatAir!:number;// Humid heat of air
DryingMedium!:number;// Humid heat of air
Wia !:number;//inlet wet air
Gassumed!:number; // assumed G
Adryer!:number; //area of dryer 
Ddryer!:number;//diameter of dryer s
LVp  !: number ;//  kcal /kg deg c  latent heat of vapourisation
 qt !:number ; //amount of heat transfrer per kg
 Ha !:number ; //kg water/kg d air // humidity 
 Dbt ! :number ;
 Wbt!:number;
 xa!:number; // from % wet basis
 xb!:number; // to % wet basis
NTU :number=1.5;
lmtd !: number;
L!: number;
LbyDRatio!: number;
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