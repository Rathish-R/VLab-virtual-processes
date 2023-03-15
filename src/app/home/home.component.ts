import { Component } from '@angular/core';
import { Labs } from '../Labs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  labs: string[] = Labs;

  isFmOn !: boolean;
  isHtOn!: boolean;
  isMtOn!: boolean;
  isMoOn!: boolean;
  isCREOn!: boolean;
  isHomeOn: boolean = true;
  isAboutOn: boolean = false
  constructor() {
    this.initialize();
  }
  initialize() {
    this.isFmOn = false;
    this.isHtOn = false;
    this.isMtOn = false;
    this.isMoOn = false;
    this.isCREOn = false;

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
    this.isHomeOn = false;
    this.initialize();

    this.isFmOn = true;
  }
  onClickHt() {
    this.isHomeOn = false;
    this.initialize();
    this.isHomeOn = false;
    this.isHtOn = true;
  }
  onClickMt() {
    this.isHomeOn = false;
    this.initialize();
    this.isHomeOn = false;
    this.isMtOn = true;
  }
  onClickCre() {
    this.isHomeOn = false;
    this.initialize();
    this.isHomeOn = false;
    this.isCREOn = true;
  }
  onClickMo() {
    this.isHomeOn = false;
    this.initialize();

    this.isMoOn = true;
  }

}
