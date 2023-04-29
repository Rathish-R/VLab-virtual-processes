export class Water {
    temp!: number;
    density!: number;
    viscosity!: number;
    cp!: number;//specific  heat
    k!: number;//conductivity
    constructor(temp: number) {

        if (temp >= 0 && temp < 20) {
            debugger;
            this.density = 1002;
            this.viscosity = 0.001788;
            this.cp = 4216;
            this.k = 0.5522;
        }
        else if (temp >= 20 && temp < 40) {
            this.density = 1000;
            this.viscosity = 0.001006;
            this.cp = 4178;
            this.k = 0.5978;
        }

        else if (temp >= 40 && temp < 60) {
            this.density = 995;
            this.viscosity = 0.000657;
            this.cp = 4178;
            this.k = 0.6280;
        }
        else if (temp >= 60 && temp < 80) {
            this.density = 985;
            this.viscosity = 0.000478;
            this.cp = 4183;
            this.k = 0.6513;
        }
        else if (temp >= 80 && temp < 100) {
            this.density = 974;
            this.viscosity = 0.000364;
            this.cp = 4195;
            this.k = 0.6687;
        }
        else if (temp >= 100 && temp < 120) {
            this.density = 961;
            this.viscosity = 0.000293;
            this.cp = 4216;
            this.k = 0.6804;
        }
        else if (temp >= 120 && temp < 140) {
            this.density = 945;
            this.viscosity = 0.000247;
            this.cp = 4250;
            this.k = 0.6850;
        }
        else if (temp >= 140 && temp < 160) {
            this.density = 928;
            this.viscosity = 0.000213;
            this.cp = 4282;
            this.k = 0.6838;
        }
        else if (temp >= 160 && temp < 180) {
            this.density = 909;
            this.viscosity = 0.000213;
            this.cp = 4282;
            this.k = 0.6838;
        }
        else if (temp >= 180 && temp < 200) {
            this.density = 889;
            this.viscosity = 0.000173;
            this.cp = 4282;
            this.k = 0.6838;
        }
    }
}