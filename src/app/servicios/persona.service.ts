import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }


  addPersona(datos:any){
    let params  = new HttpParams()
    .append('name',datos.name)
    .append('email',datos.email)
    .append('password',datos.password)
    .append('nombre',datos.nombre)
    .append('cedula',datos.ced)
    .append('direccion',datos.direccion)
    .append('fecha_nacimiento',datos.fnacimiento)
    .append('rol_id',datos.rol_id)

   return  this.http.post('http://127.0.0.1:8000/api/auth/register',params);
  }
}
