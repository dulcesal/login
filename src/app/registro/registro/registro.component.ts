
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpService } from '../../services/http.service';



@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})




export class RegistroComponent implements OnInit {

  nombre: string = '';
  ape_pa: string = '';
  ape_ma: string = '';
  email: string = '';
  password: string = '';


  constructor(private router: Router,
    private titulo: Title,
    private http: HttpService
  ) {
    titulo.setTitle('vaca');
  }

  ngOnInit() {
  }


  registro() {
    this.http.Registro(this.nombre, this.ape_pa, this.ape_ma, this.email, this.password).subscribe((data: any) => {
      console.log(data);
      if (data.success == 1) {
        Swal.fire({
          title: '¡Puedes entrar a Vacas!',
          icon: 'success',
          text: 'Ingresaste con exito',
          timer: 2000
        });
        this.router.navigate(['/home']);
      }
      else {
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'no se pudo realizar el registro',
          timer: 2000

        });
      }
    })
  }


}
