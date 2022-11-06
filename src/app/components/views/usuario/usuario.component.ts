import { Router } from '@angular/router';
import { HeaderService } from './../../template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Usuários',
      icon: 'people',
      routeUrl: '/usuarios'
    }

  }

    ngOnInit(): void {
    }
  
    navigateToUsuarioCreate(): void {
      this.router.navigate(['/usuario/create'])
    }

}
