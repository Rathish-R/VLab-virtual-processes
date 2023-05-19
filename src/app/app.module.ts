import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChemicalRectionEngineeringComponent } from './chemical-rection-engineering/chemical-rection-engineering.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from './material/material.module';
import { MatTreeModule } from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeatTransferModule } from './heat-transfer/heat-transfer/heat-transfer.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { VerticalCondenserComponent } from './vertical-condenser/vertical-condenser.component';
import { DoublePipeHExComponent } from './double-pipe-hex/double-pipe-hex.component';
import { CycloneSeparatorComponent } from './cyclone-separator/cyclone-separator.component';
import { AnnulusPipeComponent } from './annulus-pipe/annulus-pipe.component';
import { ScreenEffectivenessComponent } from './screen-effectiveness/screen-effectiveness.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChemicalRectionEngineeringComponent,


    SideNavComponent,
    VerticalCondenserComponent,
    DoublePipeHExComponent,
    CycloneSeparatorComponent,
    AnnulusPipeComponent,
    ScreenEffectivenessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    MatSnackBarModule,
    HeatTransferModule,
    MatGridListModule, MaterialModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
