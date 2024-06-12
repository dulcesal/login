import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private titulo: Title) {
    titulo.setTitle('vaca');
  }

  ngOnInit() {
  }
  crud() {

    this.router.navigate(['/crud']);
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

} 
