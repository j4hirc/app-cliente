import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necesario para usar [(ngModel)]
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) {}
    ngOnInit(): void {
  }

  create(): void {
    this.clienteService.createCliente(this.cliente).subscribe(() => {
      this.cliente = new Cliente();
    });
  }
}
