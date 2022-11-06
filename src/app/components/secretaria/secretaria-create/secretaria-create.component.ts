import { SecretariaService } from './../secretaria.service';
import { Secretaria } from './../secretaria-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secretaria-create',
  templateUrl: './secretaria-create.component.html',
  styleUrls: ['./secretaria-create.component.css']
})
export class SecretariaCreateComponent implements OnInit {

  secretaria: Secretaria = {
    nom_secretaria: '',
    nom_endereco: '',
    cod_telefone: '',
    sta_secretaria: 'A',
    nom_responsavel: '',
    des_observacao: ''
  }

  constructor(private secretariaService: SecretariaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createSecretaria(): void {
    this.secretariaService.create(this.secretaria).subscribe(() => {
      this.secretariaService.showMessage('Secretaria criada com sucesso!')
      this.router.navigate(['/secretarias'])
    })

  }

  cancel(): void {
    this.router.navigate(['/secretarias'])
  }

}
