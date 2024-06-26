import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpService } from '../services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})
export class HomeComponent implements OnInit {


  email: string = '';
  password: string = '';



  constructor(
    private router: Router,
    private titulo: Title,
    private http: HttpService
  ) {
    titulo.setTitle('vaca');
  }

  ngOnInit() {

  }

  onSubmit() {

  }
  registro() {

    this.router.navigate(['/registro']);
  }


  login() {
    this.http.Login(this.email, this.password).subscribe((data: any) => {
      console.log(data);
      if (data.success == 1) {
        Swal.fire({
          title: '¡Registro Exitoso!',
          icon: 'success',
          text: 'Ingresaste con exito',
          timer: 2000
        });
        this.router.navigate(['/login']);
      }
      else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'usuario y contraseña incorrectos',
          timer: 2000

        });
      }
    })
  }



}
