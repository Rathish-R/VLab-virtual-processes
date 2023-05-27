import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMap } from '../home/Equipments';
import { MatToolbar } from '@angular/material/toolbar';
@Component({
  selector: 'app-mechanicaloperations',
  templateUrl: './mechanicaloperations.component.html',
  styleUrls: ['./mechanicaloperations.component.css']
})
export class MechanicaloperationsComponent  {
  m:any = EMap;
  selected: string = "Cyclone Separator";
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
        this.snackBar.open('Currently in Heat Transfer Stream , Use the menu bar to Navigate to other processes', 'Ok', {
          duration: 5000,
        });
      }, 2000);
      this.equipments = [
        "Cyclone Separator", "Screen Effectiveness", "Roll Crusher",];
    this.selected = (localStorage.getItem('Current'))?localStorage.getItem('Current')+'':'Cyclone Separator';
    

  }
  ngOnChanges(){
    this.selectedExp(this.selected)
  }
selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    if(option=='Cyclone Separator'){
      option="CycloneSeparator"
    }
    else if(option=='Screen Effectiveness'){
      option="ScreenEffectiveness"
    }
    else if(option=='Roll Crusher'){
      option="RollCrusher"
    }
    else if(option=='Vertical Condenser'){
      option="VerticalCondenser"
    }
    localStorage.setItem('Current',option);
    this.navigateTo(option);
  }
  navigateTo(url: string): void {
    this.router.navigate(['/Home','MechanicalOperations',url]);
  }
  ngOnDestroy() {

    localStorage.removeItem('Current');
  }
}



