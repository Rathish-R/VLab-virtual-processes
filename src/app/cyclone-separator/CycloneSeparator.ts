export class CyclonSep {
Q !:number //- gas flow rate
n!:number // - separation efficiency
v!:number // - inlet velocity
Ac !:number //- c s area of Cyclone inlet
u !:number //- gas inlet velocity factor
Dc !:number //- cyclone body diameter  
Lc !:number //- Length of cyclone
Bc !:number //- Cone angle 
Dvf !:number //-  Vortex diameter
Lvf !:number //- Vortex length
Ds !:number //- Spigot Diameter
Ls !:number //- spigot length
DelP !:number //- Pressure Drop
Dp!:number //- particle dia
Dcp !:number //-Cutoff diameter
na !:number //-actual efficiency
nc!:number //- collecion efficiency
C1 !:number //-c1 factor
C2 !:number //-c2 factor
Bfact !:number //- Bfactoe 
Efact !:number // - E fact
DensityG!:number; // -gas density
k!:number
isCalculated: boolean = false;
NStk!:number;
DensityP!: number; //kg/m3
ViscG!: number; //N/sm2

    Flowrate!: number;
QPipe!: number; // flowrate inside the pipe
    
    TFR!: number;
  
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