import { HomeComponent } from './pages/blogger/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login/login.component';
import { RegisterComponent } from './public/register/register/register.component';

const routes: Routes = [
  {
    path:'inicio-sesion',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegisterComponent
  },
  {
    path:'usuario/blog/home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
