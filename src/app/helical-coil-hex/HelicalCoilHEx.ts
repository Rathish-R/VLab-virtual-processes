export class HelicalCoilHEx {

  // Vf!:number;
  isCalculated: boolean = false;

  SFR!: number;
  TFR!: number;
  SFDensity!: number; //kg/m3
  TFDensity!: number; //kg/m3
  SFVisc!: number; //N/sm2
  TFVisc!: number;//N/sm2
  SFCond!: number; // W/moC
  TFCond!: number; // W/moC
  DoCylinder!: number;
  DiCylinder!: number;
  do!: number;
  di!: number;
  Lc!: number;
  Vc!: number;
  de !:number;
  c!:number; //clearence
  Va!: number;// volume of Annulus
  Vf!: number;// volume of full Annulus
  dh!: number; // Helix avg  Dia
  B!: number;// Helix inner dia
  C!: number;
  Ac!:number;//coil flow area 
  Vcoil!:number;
  NreC !:number;
  NreA !:number;
  NprC!:number;
  NprA!:number;
  Hcoil!:number;
  HAnn !:number;
Aa!:number;// Area of Annullus;
  Van!:number;
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
  isFeasible: boolean = false;
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

  QFound!: number;
  Tco!: number;
  Tho!: number;
}