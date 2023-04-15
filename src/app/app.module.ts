import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RotaryDryerComponent } from './mass-transfer/rotary-dryer/rotary-dryer.component';
import { FluidMechanicsComponent } from './fluid-mechanics/fluid-mechanics.component';
import { MassTransferComponent } from './mass-transfer/mass-transfer.component';
import { ChemicalRectionEngineeringComponent } from './chemical-rection-engineering/chemical-rection-engineering.component';
import { SemiBatchComponent } from './semi-batch/semi-batch.component';
import { MechanicalOperationsComponent } from './mechanical-operations/mechanical-operations.component';
import { HeatTransferComponent } from './heat-transfer/heat-transfer.component';
import { ShellAndTubeComponent } from './shell-and-tube/shell-and-tube.component';
import { SimpleDistillationComponent } from './simple-distillation/simple-distillation.component';
import { HelicalCoilHExComponent } from './helical-coil-hex/helical-coil-hex.component';
import { OpenPanEvaporatorComponent } from './open-pan-evaporator/open-pan-evaporator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import{MaterialModule} from './material/material.module';
import { MatTreeModule } from '@angular/material/tree';
import { BatchKineticsComponent } from './batch-kinetics/batch-kinetics.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    FluidMechanicsComponent,
    MassTransferComponent,
    ChemicalRectionEngineeringComponent,
    MechanicalOperationsComponent,
    HeatTransferComponent,
    ShellAndTubeComponent,
    SimpleDistillationComponent,
    HelicalCoilHExComponent,
    OpenPanEvaporatorComponent,
    SideNavComponent,
    BatchKineticsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
