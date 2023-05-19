import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMap } from '../home/Equipments';

@Component({
  selector: 'app-mass-transfer-exp',
  templateUrl: './mass-transfer-exp.component.html',
  styleUrls: ['./mass-transfer-exp.component.css']
})
export class MassTransferExpComponent {
  m:any = EMap;
  selected: string = "Rotary Dryer";
  isTreeOn :boolean =false;
  ismenuOn : boolean=false;
  equipments!: string[];
  selectedOperation!: string;

 
 constructor(
  private router: Router,
  private snackBar: MatSnackBar
  ){

 }
  ngOnInit() {

      setTimeout(() => {
        this.snackBar.open('Currently in Mass Transfer Stream , Use the menu bar to Navigate to other processes', 'Ok', {
          duration: 5000,
        });
      }, 2000);

    this.selected = (localStorage.getItem('Current'))?localStorage.getItem('Current')+'':'Shell and Tube Heat Exchanger';
    this.equipments = [
      "Rotary Dryer"];

  }
  ngOnChanges(){
    this.selectedExp(this.selected)
  }
selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    if(option=='Rotary Dryer'){
      option="RotaryDryer"
    }
  
    localStorage.setItem('Current',option);
    this.navigateTo(option);
  }
  navigateTo(url: string): void {
    this.router.navigate(['/Home','MassTransfer',url]);
  }
  ngOnDestroy() {

    localStorage.removeItem('Current');
  }
}




