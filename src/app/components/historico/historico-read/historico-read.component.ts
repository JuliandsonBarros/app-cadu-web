import { Component, OnInit } from '@angular/core';
import { Historico } from '../historico-model';
import { HistoricoService } from '../historico.service';

@Component({
  selector: 'app-historico-read',
  templateUrl: './historico-read.component.html',
  styleUrls: ['./historico-read.component.css']
})
export class HistoricoReadComponent implements OnInit {

  historico: Historico[]
  displayedColumns = ['id', 'dthHistorico', 'tipoAcao', 'descricaoAcao', 'ip', 'usuario']

  constructor(private historicoService: HistoricoService) { }

  ngOnInit(): void {
    this.historicoService.read().subscribe(historico => {
      console.log(this.historico)
      this.historico = historico;
    })
  }

}
