import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewProductComponent } from './pages/novo-produto/new-product.component';
import { LoginComponent } from './pages/login/login.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product/new', component: NewProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: EmailComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
