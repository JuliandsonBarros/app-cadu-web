import { Usuario } from './../Usuario-model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    nom_usuario: '',
    nom_email: '',
    dta_nascimento: '',
    cod_cpf: '',
    cod_rg: '',
    cod_telefone: '',
    sta_usuario: 'A'
  }


  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário criado com sucesso!')
      this.router.navigate(['/usuarios'])
    })

  }

  cancel(): void {
    this.router.navigate(['/usuarios'])
  }

}
