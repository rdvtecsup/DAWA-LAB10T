import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-form-enviado',
  templateUrl: './form-enviado.component.html',
  styleUrls: ['./form-enviado.component.css']
})
export class FormEnviadoComponent {
  nombre!: String;
  email!: String;
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'],
      this.email = params['email']
    })
  }
}
