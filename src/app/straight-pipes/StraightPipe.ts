export class StraightPipes {

    isCalculated: boolean = false;
Di!: number;
    Flowrate!: number;
QPipe!: number; // flowrate inside the pipe
    
    TFR!: number;
    Density!: number; //kg/m3

    Visc!: number; //N/sm2

    Cond!: number; // W/moC
    
    lmtd !: number;
    Cp!: number;
    Dh!:number;// darcys Fraction
    f!:number; // Darcy Friction Factor;





    Velocity!: number;

    NRe!: number;
    NPrSs!: number;

    isFeasible: boolean=false;
    HShellSide!: number;

    AreaShell!: number;
    OverallHTCoeff!: number;

    PDrop!: number;
  isValid!: boolean;
  Tco!:number;
  Tho!:number;
}