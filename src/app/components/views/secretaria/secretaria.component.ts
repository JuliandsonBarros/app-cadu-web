import { HeaderService } from '../../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Secretarias',
      icon: 'work',
      routeUrl: '/secretarias'
    }

  }

    ngOnInit(): void {
    }
  
    navigateToSecretariaCreate(): void {
      this.router.navigate(['/secretaria/create'])
    }

}
