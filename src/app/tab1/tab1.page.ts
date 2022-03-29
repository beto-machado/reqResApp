import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  urlImg = '"https://reqres.in/img/faces/';

  listarUsuarios = [];

  count: number = 0;
  next: string = '';
  previous: string = '';
  buscarUsuarios: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.buscarUsuarios(this.userService.urlApi);
  }

  buscarPokemon(url: string) {
    this.listarUsuarios = [];
    this.userService.buscarListaUsuarios(url).subscribe(retorno => {
      this.count = retorno['count'];
      this.next = retorno['next'];
      this.previous = retorno['previous'];

      retorno['results'].forEach(usuarios => {
        this.userService.buscarDadosUsuarios(usuarios['url']).subscribe(dadosUsuarios => {
          this.listarUsuarios.push(dadosUsuarios);
          this.listarUsuarios.sort((a,b)=> a['id'] - b['id']);
        })
      })
    });
  }

}
