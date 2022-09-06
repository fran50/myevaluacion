import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CirculoComponent } from './circulo/circulo.component';
import { DalumnoComponent } from './dalumno/dalumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CirculoComponent,
    DalumnoComponent,
    AlumnosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
