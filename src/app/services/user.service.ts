import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  buscarListaUsers(url: string) {
    return this.http.get(url);
  }
}
