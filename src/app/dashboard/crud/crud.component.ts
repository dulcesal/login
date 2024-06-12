import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  datoTabla: any[] = [];

  ngOnInit() {
    this.Mostrar();
  }
  constructor(private router: Router,
    private titulo: Title,
    private http: HttpService,
    private dialog: MatDialog
  ) {
    titulo.setTitle('vaca');
  }


  razasN() {

    this.router.navigate(['/razasN']);
  }
  precioN() {

    this.router.navigate(['/precioN']);
  }
  login() {

    this.router.navigate(['/login']);
  }

  Mostrar() {

    this.http.Mostrar().subscribe((data: any) => {
      console.log(data);
      this.datoTabla = data;
    }, error => {
      console.error('Error a ver usuario:', error);
    });

  }

  eliminar(id: any) {
    this.http.Eliminar(id).subscribe((data: any) => {
      if (data.success == 1) {
        Swal.fire({
          title: '¡Eliminado!',
          icon: 'success',
          text: 'Eliminacion Completa',
          timer: 2000
        });

      }
      else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'No se pudo eliminar',
          timer: 2000

        });

      }

    })
  }
  abrirModal(id: any) {
    let dialogRef = this.dialog.open(EditarComponent, {
      width: '80%',
      height: '80%'
    });
    localStorage.setItem('id_usuario', id);
  }

}
