import { Component } from '@angular/core';
import { Labs } from '../Labs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  labs: string[] = Labs;
  selected!: string
  isFmOn !: boolean;
  isHtOn!: boolean;
  isMtOn!: boolean;
  isMoOn!: boolean;
  isCREOn!: boolean;
  isHomeOn: boolean = true;
  isAboutOn: boolean = false
  color:string="rgb(216,191,216)";
  constructor() {
    this.initialize();
  }
  initialize() {
    this.isFmOn = false;
    this.isHtOn = false;
    this.isMtOn = false;
    this.isMoOn = false;
    this.isCREOn = false;
    this.isHomeOn = true;
    this.isAboutOn = false
  }

  OnClickHome() {
    this.initialize();

    this.isHomeOn = true;
  }
  onClickAbout() {
    this.isHomeOn = false;
    this.isAboutOn = true;
  }
  onClickFm() {
    this.initialize();
    this.isHomeOn = false;

    this.isFmOn = true;
  }
  onClickHt() {
    this.initialize();
    this.isHomeOn = false;
    this.isHtOn = true;
  }
  onClickMt() {
    this.initialize();
    this.isHomeOn = false;
    this.isMtOn = true;
  }
  onClickCre() {
    this.initialize();
    this.isHomeOn = false;
    this.isCREOn = true;
  }
  onClickMo() {
    this.initialize();
    this.isHomeOn = false;
    this.isMoOn = true;
  }

}
