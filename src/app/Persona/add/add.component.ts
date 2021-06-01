import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private service: ServiceService, private router: Router) {}
  persona: Persona;
  ngOnInit(): void {}

  prepareToSave(name: string, apellidos: string) {
    this.persona = new Persona(name, apellidos);
    this.Guardar(this.persona);
  }

  Guardar(persona: Persona) {
    this.service.createPersona(persona).subscribe((data) => {
      alert('Se agregó con éxito');
      this.router.navigate(['listar']);
    });
  }
}
