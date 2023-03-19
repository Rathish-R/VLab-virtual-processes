export class GasOil{
    temp!:number;
    density!:number;
    viscosity!:number;
    cp!:number;//specific  heat
    k!:number;//conductivity
    constructor(temp:number){
        if(temp>=0 && temp<80){
            this.density=870;
            this.viscosity=0.00028;
            this.cp=1970;
            this.k=0.12;;
        }
        else  if(temp>=80 && temp<150){
            this.density=850;
            this.viscosity=0.00017;
            this.cp=2280;
            this.k=0.125;
        }

        else  if(temp>=150 && temp<240){
            this.density=830;
            this.viscosity=0.00006;
            this.cp=2590;
            this.k=0.130;
        }
      
       
    }
}