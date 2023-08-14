import { Component } from '@angular/core';
import { PersonaService } from '../servicios/persona.service';
//import swal from'sweetalert2';
@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  nombre:any; email:any; password:any; direccion:any; fnacimiento:any;
  name:any ;cedula:any;

  constructor(private personaService:PersonaService){}



  addPersona(){
    let data={
      'name': this.name,
      'email':this.email,
      'password':this.password,
      'nombre':this.nombre,
      'ced':this.cedula,
      'direccion':this.direccion,
      'fnacimiento':this.fnacimiento,
      'rol_id' :1,
    }

    this.personaService.addPersona(data).subscribe({
      next:(d:any)=>{
        debugger
       // swal('Registro exitoso...', "asdasd", 'success');
      }, 
      error:(e)=>{
        debugger
      }
    })
    
  }
}
