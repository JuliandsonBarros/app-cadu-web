import { SecretariaService } from './../secretaria.service';
import { Secretaria } from './../secretaria-model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../usuario/Usuario-model';
import { UsuarioService } from '../../usuario/usuario.service';


@Component({
  selector: 'app-secretaria-create',
  templateUrl: './secretaria-create.component.html',
  styleUrls: ['./secretaria-create.component.css']
})
export class SecretariaCreateComponent implements OnInit {

  responsaveis: Usuario[]

  secretaria = new Secretaria();

  constructor(private secretariaService: SecretariaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private active: ActivatedRoute) { }

  ngOnInit(): void {

    this.active.params.subscribe(params => {
      this.findSecretaria(params['id']);
    })

    this.usuarioService.read().subscribe(usuarios => {
      this.responsaveis = usuarios;
    })

  }

  createSecretaria(): void {
     this.secretariaService.create(this.secretaria).subscribe(() => {
   //  if(this.secretaria == null){
     this.secretariaService.showMessage('Secretaria criada com sucesso!')
      this.router.navigate(['/secretarias'])
  //   }else{
     // this.secretariaService.showMessage('Secretaria criada com sucesso!')
    //  this.router.navigate(['/secretarias'])
    // }
    })
  }

  updateSecretaria(): void{
    this.secretariaService.update(this.secretaria).subscribe(() => {
      this.secretariaService.showMessage("Secretaria atualizada com sucesso!")
      this.router.navigate(["/secretarias" ])
    })
  }

  atualizaOuCria(){
    if(this.secretaria.id_secretaria == null){
      return this.createSecretaria();
    }else{
      return this.updateSecretaria();
    }
  }

  findSecretaria(id: number): void{
    if(id != null){
      this.secretariaService.readById(id).subscribe(secretaria => {
        this.secretaria = secretaria;
      })
    }
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1. nom_usuario === o2. nom_usuario && o1.cod_cpf === o2.cod_cpf;
  }

  cancel(): void {
    this.router.navigate(['/secretarias'])
  }

}
