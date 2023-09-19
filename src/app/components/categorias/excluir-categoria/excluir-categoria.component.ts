import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css'],
})
export class ExcluirCategoriaComponent implements OnInit {
  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private toastService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoria = new Categoria('');
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriaService
      .selecionarPorId(id)
      .subscribe((categoria: Categoria) => {
        this.categoria = categoria;
      });
  }

  excluirCategoria(): void {
    this.categoriaService.excluir(this.categoria).subscribe(() => {
      this.toastService.success('Categoria excluída com sucesso!', 'Sucesso');

      this.router.navigate(['/categorias', 'listar']);
    });
  }
}
