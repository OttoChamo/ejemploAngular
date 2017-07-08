import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent  } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent }from './components/home/home.component';
import { UsuariosComponent }from './components/usuarios/usuarios.component';

//rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
