import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-razas',
  standalone: true,
  imports: [],
  templateUrl: './razas.component.html',
  styleUrl: './razas.component.css'
})
export class RazasComponent implements OnInit {


  constructor(private router: Router, private titulo: Title) {
    titulo.setTitle('vaca');
  }

  ngOnInit() {
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
