import { AppComponent } from './app.component';
import { LoginComponent } from './components/autentica/login/login.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioComponent } from './components/views/usuario/usuario.component';
import { SecretariaCreateComponent } from './components/secretaria/secretaria-create/secretaria-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { SecretariaComponent } from './components/views/secretaria/secretaria.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';

const routes: Routes = [

  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "secretarias",
    component: SecretariaComponent
  },
  {
    path: "secretaria/create",
    component: SecretariaCreateComponent
  },
  {
    path: "secretaria/update/:id",
    component: SecretariaCreateComponent
  },
  {
    path: "usuarios",
    component: UsuarioComponent
  },
  {
    path: "usuario/create",
    component: UsuarioCreateComponent
  },
  {
    path: "usuario/update/:id",
    component: UsuarioCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
