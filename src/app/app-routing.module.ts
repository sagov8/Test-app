import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './Producto/add/add.component';
import { EditComponent } from './Producto/edit/edit.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { ProdGuardService as guard} from './guards/prod-guard.service';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'edit', component:EditComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
