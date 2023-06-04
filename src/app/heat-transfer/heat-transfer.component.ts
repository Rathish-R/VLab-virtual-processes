import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EMap } from '../EquipmentsMap';
@Component({
  selector: 'app-heat-transfer',
  templateUrl: './heat-transfer.component.html',
  styleUrls: ['./heat-transfer.component.css']
})
export class HeatTransferComponent {
  m: any = EMap;
  selected: string = "Shell and Tube Heat Exchanger";
  isTreeOn: boolean = false;
  ismenuOn: boolean = false;
  equipments!: string[];
  qParams !:string;
  selectedOperation!: string;
  HTUrls: string[] = ["ShellAndTubeHeatExchanger", "HelicalCoilHeatExchanger", "DoublePipeHeatExchanger"
    , "VerticalCondenser"];


  constructor(
    private Activatedroute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {

  }
  ngOnInit() {

    setTimeout(() => {
      this.snackBar.open('Currently in Heat Transfer Stream , Use the menu bar to Navigate to other processes', 'Ok', {
        duration: 5000,
      });
    }, 2000);
    var href = window.location.href;
    console.log(href);
      this.equipments = [
      "Shell and Tube Heat Exchanger", "Helical Coil Heat Exchanger", "Vertical Condenser", "Double Pipe Heat Exchanger",];


      this.selected = this.Activatedroute.snapshot
      .queryParams['process'] || 'Shell and Tube Heat Exchanger';
  }
  ngOnChanges() {
    this.selectedExp(this.selected)
  }
  selectedLab(option: string) {
    option = option.replace(" ", "");
    this.navigateTo(option);
  }
  selectedExp(option: string) {

    localStorage.setItem('Current', EMap.get(option)!);
    this.navigateTo(EMap.get(option)!);
  }
  navigateTo(url: string): void {
    this.router.navigate(['/Home', 'HeatTransfer', url],
    { queryParams: { process: this.selected} });
  }
  ngOnDestroy() {

  }
}


