import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  // Asegúrate de que esta sea la IP actual de tu máquina virtual
  private urlEndPoint: string = 'http://192.168.47.20:8381/api/clientes';  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.urlEndPoint);
}

  createCliente(cliente: Cliente): Observable<Cliente> {
    // Hace una petición POST real enviando los datos del formulario a la API
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }
}