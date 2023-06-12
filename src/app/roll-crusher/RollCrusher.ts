export class RollCruser {
    NipAngle!: number; // Angle of nip - theeta 
    Dr !: number;// Dia of roll - D 
    Dpmax!: number;// max dia of feed - Df
    Lr!: number;//     Length between two rolls : Lr 
    Dpi!: number;// dia of feed particles : x
    N!: number;// standard speed : N
    Wr!: number;// width of roll : Wr
    LDens!: number;// density of limestone : LDens
    Qtheo!: number;// crusher capacity theo : Qtheo 
    Qact!: number;// actual capacity :Qact
    P!: number;// crushing powrer : P
    isCalculated !:boolean;
    Wi!: number;// Work index : wi
    Mfr!: number;// mass flow rate : mfr
    Feedmass!:number;
    CrushTime!:number;
    kb!:number;
    redRatio ! : number; // reduction ratio

}