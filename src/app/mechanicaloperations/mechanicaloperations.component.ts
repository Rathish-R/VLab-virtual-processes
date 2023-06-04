import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMap } from '../EquipmentsMap';
import { ActivatedRoute } from '@angular/router';

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
 

 constructor(
  private Activatedroute: ActivatedRoute,
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
        this.selected = this.Activatedroute.snapshot
        .queryParams['process'] || 'Cyclone Separator';

  }
  ngOnChanges(){
    this.selectedExp(this.selected)
  }
selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    localStorage.setItem('Current', EMap.get(option)!);
    this.navigateTo(EMap.get(option)!);
  }
  navigateTo(url: string): void {
    this.router.navigate(['/Home','MechanicalOperations',url] ,
    { queryParams: { process: this.selected} });
  }
  ngOnDestroy() {

    localStorage.removeItem('Current');
  }
}



