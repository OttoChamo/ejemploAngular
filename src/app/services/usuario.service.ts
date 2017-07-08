import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
  uriUsuario = 'http://localhost:3000/api/v1/usuario';
  usuarios: any[];

  constructor(private http: Http) {}

  getUsuarios() {
    return this.http.get(this.uriUsuario)
      .map(res => {
        console.log("Response: " +res.json());
        this.usuarios = res.json();
      });
  }

}
