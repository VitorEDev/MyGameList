import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Item {
  id?: string;
  titulo: string;
  descricao?: string;
  imagemUrl?: string;
  status: string;
  nota?: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  novoItem: Item = {
    titulo: '',
    descricao: '',
    imagemUrl: '',
    status: 'Playstation',
    nota: 0,
  };

  itens: Item[] = [];
  filtro: string = 'todos';

  editando: boolean = false;
  idEditando: string | null = null;

  adicionarItem() {
    if (!this.novoItem.titulo.trim()) return;

    const novoComId = {
      ...this.novoItem,
      id: crypto.randomUUID(),
    };

    this.itens.push(novoComId);

    localStorage.setItem('itens', JSON.stringify(this.itens));

    this.limparFormulario();
  }

  salvarItem() {
    if (!this.novoItem.titulo.trim()) return;

    if (this.editando && this.idEditando) {
      // Atualiza o item existente
      const index = this.itens.findIndex((item) => item.id === this.idEditando);
      if (index !== -1) {
        this.itens[index] = { ...this.novoItem, id: this.idEditando };
      }
      this.editando = false;
      this.idEditando = null;
    } else {
      // Adiciona novo item
      this.adicionarItem();
      return;
    }

    localStorage.setItem('itens', JSON.stringify(this.itens));

    this.limparFormulario();
  }

  editarItem(item: Item) {
    this.novoItem = { ...item };
    this.editando = true;
    this.idEditando = item.id || null;
  }

  cancelarEdicao() {
    this.editando = false;
    this.idEditando = null;
    this.limparFormulario();
  }

  limparFormulario() {
    this.novoItem = {
      titulo: '',
      descricao: '',
      imagemUrl: '',
      status: 'Playstation',
      nota: 0,
    };
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
    localStorage.setItem('itens', JSON.stringify(this.itens));
  }

  get itensFiltrados() {
    if (this.filtro === 'todos') return this.itens;
    return this.itens.filter((item) => item.status === this.filtro);
  }
}
