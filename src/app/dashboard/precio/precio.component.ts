import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precio',
  standalone: true,
  imports: [],
  templateUrl: './precio.component.html',
  styleUrl: './precio.component.css'
})
export class PrecioComponent implements OnInit {


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
