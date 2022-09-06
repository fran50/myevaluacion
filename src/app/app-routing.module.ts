import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DalumnoComponent } from './dalumno/dalumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alumnos',
    pathMatch: 'full',
  },
  {
    path: 'alumnos',
    component: AlumnosComponent,
  },
  /*{
    path:'bicicletas',
    component:BicicletasComponent,
  },*/
  {
    path: 'dalumno/:id',
    component: DalumnoComponent,
  }
  /*,
  {
    path: '**',
    component: ErropageComponent,
  }
  */



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
