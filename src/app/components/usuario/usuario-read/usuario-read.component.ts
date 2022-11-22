import { UsuarioService } from './../usuario.service';
import { Usuario } from './../Usuario-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios: Usuario[]
  displayedColumns = ['id_usuario', 'nom_usuario', 'nom_email', 'dta_nascimento', 'cod_cpf', 'cod_telefone', 'sta_usuario', 'action']

  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios;
    })

  }
  
}
