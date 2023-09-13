import { Component, OnInit } from '@angular/core';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../nota';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css'],
})
export class ExcluirNotaComponent implements OnInit {
  nota: Nota;

  constructor(
    private notaService: NotaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.nota = new Nota('', '', 'dark', 0);
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.nota = this.notaService.selecionarPorId(id)!;
  }

  excluirNota() {
    this.notaService.excluir(this.nota);

    this.router.navigate(['/notas', 'listar']);
  }
}
