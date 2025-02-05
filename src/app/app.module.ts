import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { NewProductComponent } from './pages/novo-produto/new-product.component';
import { FormProductComponent } from './formulario-produto/form-product.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { CarroService } from './service/carro.service'; 
import { provideHttpClient, withInterceptorsFromDi, withFetch} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { EmailComponent } from './email/email.component';
import { ImagemComponent } from './imagem/imagem.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    NewProductComponent,
    FormProductComponent,
    HomeComponent,
    LoginComponent,
    EmailComponent,
    ImagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    CarroService,
    provideHttpClient(withFetch(), withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
