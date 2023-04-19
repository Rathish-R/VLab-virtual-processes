import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mechanical-operations',
  templateUrl: './mechanical-operations.component.html',
  styleUrls: ['./mechanical-operations.component.css']
})
export class MechanicalOperationsComponent {
  selected:string="Semi Batch Reactor";
  isClickLabOn:boolean=true;
  equipments:string[]=[
    "Semi Batch Reactor","CSTR-Kinetics","CSTR-in series"
  ];

  selectedOperation!: string;
  ResultObt!: boolean;
  isTheoryOn!: boolean;
  ismenuOn:boolean=false;
  isTreeOn:boolean=false;
  subjects : any[]=["Fluid Mechanics" ,"Heat Transfer","Mass Transfer","Mechanical operation","Chemical Reaction Engineering",
];
 constructor(private router: Router){

 }
  

  selectedLab(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  selectedExp(option: string) {
    option = option.replace(" ","");
    this.navigateTo(option);
  }
  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}

