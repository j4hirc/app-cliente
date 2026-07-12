import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent }
];