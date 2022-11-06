import { Secretaria } from './../secretaria-model';
import { Component, OnInit } from '@angular/core';
import { SecretariaService } from '../secretaria.service';

@Component({
  selector: 'app-secretaria-read',
  templateUrl: './secretaria-read.component.html',
  styleUrls: ['./secretaria-read.component.css']
})
export class SecretariaReadComponent implements OnInit {
  

  secretarias: Secretaria[]
  displayedColumns = ['id_secretaria', 'nom_secretaria', 'cod_telefone', 'sta_secretaria', 'action']

  
  constructor(private secretariaService: SecretariaService) { }

  ngOnInit(): void {
    this.secretariaService.read().subscribe(secretarias => {
      this.secretarias = secretarias
    })
  }


}
