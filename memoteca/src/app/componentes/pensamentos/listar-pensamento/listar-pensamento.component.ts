import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Estudando Angular 16',
      autoria: 'Alexandre',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Segundo Pensamento do listarPensamento',
      autoria: 'Alexandre',
      modelo: 'modelo2'
    }
  ];
}
