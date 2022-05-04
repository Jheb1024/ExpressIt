import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { LoginComponent } from '../public/login/login/login.component';

@Component({
  selector: 'app-public-navbar',
  templateUrl: './public-navbar.component.html',
  styleUrls: ['./public-navbar.component.css']
})
export class PublicNavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Escribir',
      icon: 'login',

    },
    {
      label: 'Nuestra Historia',
      icon: 'help'
    },
    {
      label: 'Iniciar Sesión',
      icon: 'attach_money'
    },
    {
      label: 'Registrarse',
      icon: 'notes'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
