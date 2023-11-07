import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isSubmitDisabled = true;
  constructor(private router: Router){}
  onSubmit(){
    const data: NavigationExtras = {
      queryParams: {
        nombre : this.nombre,
        email : this.email
      }
    }
    this.router.navigate(['/datos_enviados'], data)
  }
  onBlur(){
    this.isSubmitDisabled = !(this.nombre && this.email);
  }
  confirmSubmit() {
    if (window.confirm('¿Estás seguro de que deseas enviar el formulario?')) {
      this.onSubmit();
    }
  }
  
}
