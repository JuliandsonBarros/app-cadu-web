import { Usuario } from './../Usuario-model';
import { ActivatedRoute, Router } from '@angular/router';
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
    sta_usuario: 'A',
    cod_telefone: ''
    
  }

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe(params => {
      this.findUsuario(params['id']);
    })
  }

  createUsuario(): void {
    this.usuarioService.create(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário criado com sucesso!')
      this.router.navigate(['/usuarios'])
    })
  }

  updateUsuario(): void{
    this.usuarioService.update(this.usuario).subscribe(() =>{
    this.usuarioService.showMessage('Usuário Alterado com sucesso')
    this.router.navigate(['/usuarios'])
    })
  }

  atualizaOuCria(){
    if(this.usuario.id_usuario == null){
      return this.createUsuario();
    }else{
      return this.updateUsuario();
    }
  }

  findUsuario(id: number): void{
    if(id != null){
      this.usuarioService.readById(id).subscribe(usuario => {
        this.usuario = usuario;
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/usuarios'])
  }
}
