import { AuthGuard } from './../seguranca/auth.guard';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'pessoas', component: PessoasPesquisaComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_PESQUISAR_PESSOA'] }
  },

  { path: 'pessoas/novo', component: PessoaCadastroComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_PESQUISAR_PESSOA'] }
  },

  { path: 'pessoas/:codigo', component: PessoaCadastroComponent,
  canActivate: [AuthGuard],
  data: { roles: ['ROLE_PESQUISAR_PESSOA'] }
 }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
   ],
  exports: [RouterModule]
})

export class PessoasRoutingModule { }
