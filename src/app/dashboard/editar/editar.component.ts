import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {

  datosUsuario: any[] = [];
  constructor(
    private router: Router,
    private titulo: Title,
    private http: HttpService
  ) {
    titulo.setTitle('vaca');
  }

  ngOnInit() {
    let id_user = localStorage.getItem('id_usuario')
    this.http.EditarU(id_user).subscribe((data: any) => {
      console.log(data);
      this.datosUsuario = data;

    });

  }
  onSubmit() {

  }


  actualizar() {
    let id_user = localStorage.getItem('id_usuario');
    this.http.Editar(id_user, this.datosUsuario[0].Nombre, this.datosUsuario[0].ape_pa, this.datosUsuario[0].ape_ma, this.datosUsuario[0].email, this.datosUsuario[0].password).subscribe((data: any) => {
      if (data.success == 1) {
        Swal.fire({
          title: '¡Actualizado!',
          icon: 'success',
          text: 'Se actualizo Correctamente',
          timer: 2000
        });
      }
      else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'No se pudo actualizar',
          timer: 2000

        });

      }
    })
  }

}
