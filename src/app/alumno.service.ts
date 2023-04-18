import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  alumnos: any[] = [
    {
      id: 1,
      nombre: 'Ortiz Ramos, Thalia',
      curso: '1º FPB Electronica',
      foto: 'assets/fotos/1.jpg',
      evaluaciones: [
        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 7.50
            },
            {
              asignatura: 'Examen 6',
              nota: 6.60
            },
            {
              asignatura: 'Examen 7',
              nota: 8
            },
            {
              asignatura: 'Examen 8',
              nota: 6
            },
            {
              asignatura: 'Examen 9',
              nota: 6.50
            }
          ]
        }
      ]
    },
    {
      id: 2,
      nombre: 'Ortiz Ramos, Sandra',
      curso: '1º FPB Electronica',
      foto: 'assets/fotos/2.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 6
            },
            {
              asignatura: 'Examen 6',
              nota: 7.70
            },
            {
              asignatura: 'Examen 7',
              nota: 6
            },
            {
              asignatura: 'Examen 8',
              nota: 7.5
            },
            {
              asignatura: 'Examen 9',
              nota: 5
            }
          ]
        }
      ]
    },
    {
      id: 3,
      nombre: 'Chavez Villar, Jeremy Wiliam',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/3.jpg',
      evaluaciones: []
    },
    {
      id: 4,
      nombre: 'Dorado Aguilar, Daniel',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/13.jpg',
      evaluaciones: []
    },
    {
      id: 5,
      nombre: 'Ferrera Olivares, Adrian',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/12.jpg',
      evaluaciones: []
    },
    {
      id: 6,
      nombre: 'Hernández Duran, Noelia',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/9.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 6.50
            },
            {
              asignatura: 'Examen 6',
              nota: 5.90
            },
            {
              asignatura: 'Examen 7',
              nota: 2.50
            },
            {
              asignatura: 'Examen 8',
              nota: 7.25
            }
            /*,
            {
              asignatura: 'Examen 9',
              nota: 0
            }*/
          ]
        }
      ]
    },
    {
      id: 7,
      nombre: 'Mogollón Velarde, Sebastian Valentino',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/4.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 3.50
            },
            {
              asignatura: 'Examen 6',
              nota: 2.40
            },
            {
              asignatura: 'Examen 7',
              nota: 4
            },
            {
              asignatura: 'Examen 8',
              nota: 3.50
            },
            {
              asignatura: 'Examen 9',
              nota: 4
            }
          ]
        }
      ]
    },
    {
      id: 8,
      nombre: 'Ortega Pérez, Mar',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/6.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 6.50
            },
            {
              asignatura: 'Examen 6',
              nota: 7.50
            },
            {
              asignatura: 'Examen 7',
              nota: 6
            },
            {
              asignatura: 'Examen 8',
              nota: 5.50
            },
            {
              asignatura: 'Examen 9',
              nota: 5.50
            }
          ]
        }
      ]
    },
    {
      id: 9,
      nombre: 'Patón Calzada, Karla',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/7.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 7.50
            },
            {
              asignatura: 'Examen 6',
              nota: 7
            },
            {
              asignatura: 'Examen 7',
              nota: 7
            },
            {
              asignatura: 'Examen 8',
              nota: 4
            }
          ]
        }
      ]
    },
    {
      id: 10,
      nombre: 'Sanchez Gonzalez del Valle, Alba',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/8.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 7
            },
            {
              asignatura: 'Examen 6',
              nota: 5.70
            },
            {
              asignatura: 'Examen 7',
              nota: 6
            },
            {
              asignatura: 'Examen 8',
              nota: 3
            },
            {
              asignatura: 'Examen 9',
              nota: 4
            }
          ]
        }
      ]
    },
    {
      id: 11,
      nombre: 'Traverso Sosa, Nathanael',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/5.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 4
            },
            {
              asignatura: 'Examen 6',
              nota: 6.7
            },
            {
              asignatura: 'Examen 7',
              nota: 5.5
            },
            {
              asignatura: 'Examen 8',
              nota: 5
            },
            {
              asignatura: 'Examen 9',
              nota: 3
            }
          ]
        }
      ]
    },
    {
      id: 12,
      nombre: 'Ursu, Mario Ion',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/10.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 5
            },
            {
              asignatura: 'Examen 6',
              nota: 6.20
            },
            {
              asignatura: 'Examen 7',
              nota: 5
            },
            {
              asignatura: 'Examen 8',
              nota: 5
            },
            {
              asignatura: 'Examen 9',
              nota: 3
            }
          ]
        }
      ]
    },
    {
      id: 13,
      nombre: 'Zofio García, Ramon',
      curso: '2º FPB Ofimatica',
      foto: 'assets/fotos/11.jpg',
      evaluaciones: [

        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Examen 5',
              nota: 4.50
            },
            {
              asignatura: 'Examen 6',
              nota: 6.6
            },
            {
              asignatura: 'Examen 7',
              nota: 3
            },
            {
              asignatura: 'Examen 8',
              nota: 6
            },
            {
              asignatura: 'Examen 9',
              nota: 2
            }

          ]
        }
      ]
    }
  ];

  /*
 {
      id: 1,
      nombre: 'Alban Montoya, Diego',
      curso: '1º FPB Ofimatica',
      evaluaciones: [
        {
          evaluacion: '1ª Evaluacion',
          notas: [
            {
              asignatura: 'Ofimática',
              nota: 4
            },
            {
              asignatura: 'Montaje/Mant.',
              nota: 2
            },
            {
              asignatura: 'Ciencias',
              nota: 3
            },
            {
              asignatura: 'Comu./Socie',
              nota: 3
            }
          ]
        },
        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Montaje',
              nota: 6
            },
            {
              asignatura: 'Ingles',
              nota: 5.70
            },
            {
              asignatura: 'Fisica',
              nota: 5.90
            },
            {
              asignatura: 'Ofimatica',
              nota: 4
            }
          ]
        }
      ]
    },
    {
      id: 2,
      nombre: 'Ramon Zofio',
      curso: '1º FPB Ofimatica',
      evaluaciones: [
        {
          evaluacion: '1ª Evaluacion',
          notas: [
            {
              asignatura: 'Montaje',
              nota: 6
            },
            {
              asignatura: 'Ingles',
              nota: 5
            },
            {
              asignatura: 'Fisica',
              nota: 5
            },
            {
              asignatura: 'Ofimatica',
              nota: 4
            }
          ]
        },
        {
          evaluacion: '2ª Evaluacion',
          notas: [
            {
              asignatura: 'Montaje',
              nota: 6
            },
            {
              asignatura: 'Ingles',
              nota: 8
            },
            {
              asignatura: 'Fisica',
              nota: 5
            },
            {
              asignatura: 'Ofimatica',
              nota: 3
            }
          ]
        }
      ]
    }




  */

  getAllAlumnos() {
    return this.alumnos;
  }
  getAlumno(id: number) {
    return this.alumnos.find(item => id === item.id);
  }

  constructor() { }
}
