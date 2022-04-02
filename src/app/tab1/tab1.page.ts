import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  urlImg = '"https://reqres.in/img/faces/';

  listaUsers = [];

  total_pages: number = 0;
  total: number = 0;
  per_page: string = '';
  page: '';

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.buscarUser(this.userService.urlApi);
  }

  buscarUser(url: string) {
    this.listaUsers = [];

    this.userService.buscarListaUsers(url).subscribe(retorno => {
      this.page = retorno['page'];
      this.per_page = retorno['per_page'];
      this.total = retorno['total'];
      this.total_pages = retorno['total_pages'];
      this.listaUsers = retorno['data'];
    });
  }
}
