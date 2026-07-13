import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // <-- 1. Asegúrate de importar el Router
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  cliente: Cliente = new Cliente();

  // 2. Inyecta el Router en el constructor
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  create(): void {
    this.clienteService.createCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes']); 
    });
  }
}