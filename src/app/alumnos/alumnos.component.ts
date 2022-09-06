import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  alumnos: any[] = [];
  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnos = this.alumnoService.getAllAlumnos();
  }

}
