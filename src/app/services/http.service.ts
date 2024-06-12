import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'http://localhost/services/'
  constructor(private httpCli: HttpClient

  ) { }

  Login(email: String, password: String) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'email=' + email + '&password=' + password;
    return this.httpCli.post(this.url + 'ser_mostrar_autos.php', params, { headers });
  }
  Registro(nombre: String, ape_pa: string, ape_ma: string, email: String, password: String) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'nombre=' + nombre + '&ape_pa=' + ape_pa + '&ape_ma=' + ape_ma + '&email=' + email + '&password=' + password;
    return this.httpCli.post(this.url + 'ser_registro.php', params, { headers });
  }
  Mostrar() {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.httpCli.post(this.url + 'ser_mostrar_usuarios.php', { headers });
  }
  Eliminar(id_user: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'id_user=' + id_user;
    return this.httpCli.post(this.url + 'ser_borrar.php', params, { headers });
  }
  EditarU(id_user: any) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'id_user=' + id_user;
    return this.httpCli.post(this.url + 'ser_editar.php', params, { headers });
  }
  Editar(id_user: any, nombre: String, ape_pa: string, ape_ma: string, email: String, password: String) {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let params = 'id_user=' + id_user + '&nombre=' + nombre + '&ape_pa=' + ape_pa + '&ape_ma=' + ape_ma + '&email=' + email + '&password=' + password;
    return this.httpCli.post(this.url + 'ser_actualizar.php', params, { headers });
  }
}