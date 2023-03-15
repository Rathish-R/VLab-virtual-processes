import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaryDryerComponent } from './mass-transfer/rotary-dryer/rotary-dryer.component';

const routes: Routes = [
  {path:"rotaryDryer" , component:RotaryDryerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
