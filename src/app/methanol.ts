export class Methanol
{
    temp!:number;
    density!:number;
    viscosity!:number;
    cp!:number;//specific  heat
    k!:number;//conductivity
    getProperties(temp  : number){
        this.temp=temp;
        if(temp>=0 && temp<10){
            this.density=800;
            this.viscosity=0.00070;
            this.cp=1970;
            this.k=0.204;;
        }
        else  if(temp>=10 && temp<30){
            this.density=782;
            this.viscosity=0.000521;
            this.cp=2280;
            this.k=0.203;
        }

        else  if(temp>=30 && temp<50){
            this.density=764;
            this.viscosity=0.000399;
            this.cp=2590;
            this.k=0.2020;
        }
        else  if(temp>=50 && temp<70){
            this.density=746;
            this.viscosity=0.000314;
            this.cp=1720;
            this.k=0.201;
        }
        else  if(temp>=90 && temp<110){
            this.density=724;
            this.viscosity=0.000259;
            this.cp=1920;
            this.k=0.199;
        }
        
        else  if(temp>110 && temp<130){
            this.density=704;
            this.viscosity=0.000211;
            this.cp=1920;
            this.k=0.197;
        }
    }
   constructor(){
       
    }
}