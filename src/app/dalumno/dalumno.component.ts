import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-dalumno',
  templateUrl: './dalumno.component.html',
  styleUrls: ['./dalumno.component.css']
})
export class DalumnoComponent implements OnInit {

  alumno: any;
  constructor(
    private router: ActivatedRoute,
    private alumnosService: AlumnoService
  ) { }


  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const id = parseInt(params["id"]);
      console.log(id);
      this.alumno = this.alumnosService.getAlumno(id);
      console.log(this.alumno)
    });
  }

}
