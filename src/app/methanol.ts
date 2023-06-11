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
            this.density=788;
            this.viscosity=0.000521;
            this.cp=2530;
            this.k=0.1987;
        }

        else  if(temp>=30 && temp<50){
            this.density=767;
            this.viscosity=0.000399;
            this.cp=2644;
            this.k=0.2020;
        }
        else  if(temp>=50 && temp<70){
            this.density=746;
            this.viscosity=0.000314;
            this.cp=2785;
            this.k=0.1957;
        }
        else  if(temp>=90 && temp<110){
            this.density=724;
            this.viscosity=0.000259;
            this.cp=2840;
            this.k=0.199;
        }
        
        else  if(temp>110 && temp<130){
            this.density=704;
            this.viscosity=0.000211;
            this.cp=2900;
            this.k=0.197;
        }
        else{
            this.density=680;
            this.viscosity=0.000200;
            this.cp=3010;
            this.k=0.188;
        }
    }
   constructor(){
       
    }
}