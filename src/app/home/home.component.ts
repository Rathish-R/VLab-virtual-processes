import { Component, ViewChild } from '@angular/core';
import { Labs } from '../Labs';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { EMap } from './Equipments';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
 
  labs: string[] = Labs;
  _selectedParent!: string;
  _selected!:string;
  selectedLab!:string[];
  m :any=EMap;
  Fm : any[]=[
"Annulus  Pipes"

  ];
  Ht : any[]=["Shell and Tube Heat Exchanger", "Helical  Coil Heat Exchanger", "Condenser","Double Pipe Heat Exchanger"
  ];
  Mt : any[]=["Rotary dryer",
    
  ];
  Mo : any[]=[
    
   "Roll Crusher","Screen Effectiveness"
  ];
  Cre : any[]=[]
  ;
  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering"];
  
  isFmOn !: boolean;
  isHtOn!: boolean;
  isMtOn!: boolean;
  isMoOn!: boolean;
  isCREOn!: boolean;
  isHomeOn: boolean = true;
  isAboutOn: boolean = false
  color:string="rgb(216,191,216)";
 
    constructor(
      private router: Router,
      private snackBar: MatSnackBar
      ) 
  {

  }
  ngOnInit() {
    setTimeout(() => {
      this.snackBar.open('You can choose the desired stream using the respective buttons or via Menu bar', 'Ok', {
        duration: 5000,
      });
    }, 2000);
  }
  
  selected(option: string) {
    if(option=='Rotary Dryer'){
      this.router.navigate(['Home','MassTransfer',"RotaryDryer"]);
    }
    else  if(option=='Shell and Tube Heat Exchanger'){
      this.router.navigate(['Home','HeatTransfer',"ShellAndTubeHeatExchanger"]);
    }
    else  if(option=='Double Pipe Heat Exchanger'){
      this.router.navigate(['Home','HeatTransfer',"DoublePipeHeatExchanger"]);
    }
    else  if(option=='Condenser'){
      this.router.navigate(['Home','HeatTransfer',"VerticalCondenser"]);
    }
    else  if(option=='Screen Effectiveness'){
      this.router.navigate(['Home','MechanicalOperations',"ScreenEffectiveness"]);
    }
    else  if(option=='Roll Crusher'){
      this.router.navigate(['Home','MechanicalOperations',"RollCrusher"]);
    }
    else  if(option=='Helical Coil Heat Exchanger'){
      this.router.navigate(['Home','HeatTransfer',"HelicalCoilHeatExchanger"]);
    }
  }
  navigateTo(url: string): void {
    this.router.navigateByUrl(this.m[url]);
  }
  selectedP(Parent: string , child :string) {
    this.router.navigate(['Home',this.m[Parent],this.m[child]]);
  }
 

}
