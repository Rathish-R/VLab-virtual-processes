import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMap } from '../home/Equipments';

@Component({
  selector: 'app-fluid-mechanics-exp',
  templateUrl: './fluid-mechanics-exp.component.html',
  styleUrls: ['./fluid-mechanics-exp.component.css']
})
export class FluidMechanicsExpComponent {
  m:any = EMap;
  selected: string = "Shell and Tube Heat Exchanger";
  isTreeOn :boolean =false;
  ismenuOn : boolean=false;
  equipments!: string[];
  selectedOperation!: string;

  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering",
];
 constructor(
  private router: Router,
  private snackBar: MatSnackBar
  ){

 }
  ngOnInit() {

      setTimeout(() => {
        this.snackBar.open('Currently in Fluid mechanics Stream , Use the menu bar to Navigate to other processes', 'Ok', {
          duration: 5000,
        });
      }, 2000);

    this.selected = (localStorage.getItem('Current'))?localStorage.getItem('Current')+'':'Shell and Tube Heat Exchanger';
    this.equipments = [
      "Annulus Pipes" , "Straight pipes"];
    this.selectedOperation = "Theory";
  }
  ngOnChanges(){
    this.selectedExp(this.selected)
  }
selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    if(option=='Annulus Pipes'){
      option="AnnulusPipes"
    }
    else if(option=='Helical Coil Heat Exchanger'){
      option="HelicalCoilHeatExchanger"
    }
    localStorage.setItem('Current',option);
    this.navigateTo(option);
  }
  navigateTo(url: string): void {
    this.router.navigate(['/Home','FluidMechanics',url]);
  }
  ngOnDestroy() {

    localStorage.removeItem('Current');
  }
}



