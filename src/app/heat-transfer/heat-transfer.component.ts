import { Component, OnInit ,OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMap } from '../home/Equipments';
@Component({
  selector: 'app-heat-transfer',
  templateUrl: './heat-transfer.component.html',
  styleUrls: ['./heat-transfer.component.css']
})
export class HeatTransferComponent {
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
        this.snackBar.open('Currently in Heat Transfer Stream , Use the menu bar to Navigate to other processes', 'Ok', {
          duration: 5000,
        });
      }, 2000);

    this.selected = (localStorage.getItem('Current'))?localStorage.getItem('Current')+'':'Shell and Tube Heat Exchanger';
    this.equipments = [
      "Shell and Tube Heat Exchanger", "Helical Coil Heat Exchanger", "Vertical Condenser","Double Pipe Heat Exchanger", "Jacketed Vessel"
    ,"Open Pan Evaporator","Batch"];
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
    if(option=='Shell and Tube Heat Exchanger'){
      option="ShellAndTubeHeatExchanger"
    }
    else if(option=='Helical Coil Heat Exchanger'){
      option="HelicalCoilHeatExchanger"
    }
    else if(option=='Double Pipe Heat Exchanger'){
      option="DoublePipeHeatExchanger"
    }
    else if(option=='Vertical Condenser'){
      option="VerticalCondenser"
    }
    localStorage.setItem('Current',option);
    this.navigateTo(option);
  }
  navigateTo(url: string): void {
    this.router.navigate(['/Home','HeatTransfer',url]);
  }
}


