export class VOil{
    temp!:number;
    density!:number;
    viscosity!:number;
    cp!:number;//specific  heat
    k!:number;//conductivity
getProperties(temp:number){
    this.temp =temp;
    if(temp>=0 && temp<20){
        this.density=918;
        this.viscosity=0.02388;
        this.cp=2227;
        this.k=0.1333;
    }
    else  if(temp>=20 && temp<40){
        this.density=915;
        this.viscosity=0.023
        ;
        this.cp=2112;
        this.k=0.1324;
    }

    else  if(temp>=40 && temp<60){
        this.density=913.9;
        this.viscosity=0.023;
        this.cp=2134;
        this.k=0.1319;
    }
    else  if(temp>=60 && temp<80){
        this.density=9107;
        this.viscosity=0.0231;
        this.cp=2104;
        this.k=0.1303;
    }
    else  if(temp>=80 && temp<100){
        this.density=903;
        this.viscosity=0.0235;
        this.cp=1953;
        this.k=0.1314;
    }
    else  if(temp>=100 && temp<120){
        this.density=899;
        this.viscosity=0.0237;
        this.cp=1893;
        this.k=0.1278;
    }
    else  if(temp>=120 && temp<140){
        this.density=895;
        this.viscosity=0.0240;
        this.cp=1835;
        this.k=0.1270;
    }
    else  if(temp>=140 && temp<160){
        this.density=890;
        this.viscosity=0.0243;
        this.cp=1776;
        this.k=0.1261;
    }
    else  if(temp>=160 && temp<180){
        this.density=880;
        this.viscosity=0.0245;
        this.cp=1730;
        this.k=0.1250;
    }

}
    constructor(){

    }
}