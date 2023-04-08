import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRippleModule} from '@angular/material/core';
const MaterialComponents :any = [ MatButtonModule ,MatCardModule,MatTabsModule,MatRippleModule];
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports : [
    MaterialComponents
  ]

})
export class MaterialModule { }
