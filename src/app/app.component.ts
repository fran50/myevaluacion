import { Component, OnInit } from '@angular/core';
import { AlumnoService } from './alumno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myevaluacion';

  alumnos: any[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAllAlumnos();
  }
}
