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
  t!:number;
  B!: number;// Helix inner dia
  C!: number;
  N!:number; // number of turns
  Hcyl!:number;//  height of cylinder 
  LtotalCoil!:number; // total length of the coil
   
  Ac!:number;//coil flow area 
  Vcoil!:number;
  NReC !:number;
  NReA !:number;
  NPrC!:number;
  NPrA!:number;
  Hcoil!:number;
  HAnn !:number;
  Hio !:number; //corrected HT coeff coilside
Aa!:number;// Area of Annullus;
  Van!:number;
  Rf: number = 0.00082;
Ra: number = 0.00082;
TubeSheetThick: number = 0.025;
Gs  !: number;
  lmtd !: number;
  HtArea!: number;
  QShellSide!: number;
  TFCp!: number;
  SFCp!: number;

NDe!:number; // deans nummber
PDropTs!: number;
PDropSs!: number;

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
  AreaFound!: number;
  OverallHTCoeff!: number;

  Tubes!: number;
  isValid!: boolean;

  QFound!: number;
  Tco!: number;
  Tho!: number;
}