import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // <-- 1. Importa ChangeDetectorRef
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  
  clientes: Cliente[] = [];

  // 2. Inyecta el ChangeDetectorRef en el constructor
  constructor(
    private clienteService: ClienteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
        console.log("Datos guardados en la variable:", this.clientes);
        
        // 3. ¡EL GOLPE FINAL! Obliga a Angular a actualizar la tabla en pantalla
        this.cdr.detectChanges(); 
      }
    );
  }
}