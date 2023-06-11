import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EMap } from '../EquipmentsMap';

@Component({
  selector: 'app-fluid-mechanics-exp',
  templateUrl: './fluid-mechanics-exp.component.html',
  styleUrls: ['./fluid-mechanics-exp.component.css']
})
export class FluidMechanicsExpComponent {
  m:any = EMap;
  selected: string = "Annulus Pipes";
  isTreeOn :boolean =false;
  ismenuOn : boolean=false;
  equipments!: string[];
  selectedOperation!: string;

 
 constructor(
  private Activatedroute: ActivatedRoute,
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

   // this.selected = (localStorage.getItem('Current'))?localStorage.getItem('Current')+'':'Shell and Tube Heat Exchanger';
    this.equipments = [
      "Annulus Pipes" , "Straight Pipes"];

    this.selected = this.Activatedroute.snapshot
    .queryParams['process'] || 'Annulus Pipes';
  }
  ngOnChanges(){
    this.selectedExp(this.selected)
  }
selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    this.navigateTo(EMap.get(option)!);
  }
  navigateTo(url: string): void {
    this.router.navigate(['/Home','FluidMechanics',url],
    { queryParams: { process: this.selected} });
  }
  ngOnDestroy() {

    localStorage.removeItem('Current');
  }
}



