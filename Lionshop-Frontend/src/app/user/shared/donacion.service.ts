import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/Application/models/usuario.model';
import { environment } from 'src/app/Infrastructure/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  private apiBase: string=environment.apiBase;

  constructor(private http:HttpClient) { }

  register(donacion: any){
    return this.http.post(this.apiBase+'/donaciones', donacion);
  }
}
