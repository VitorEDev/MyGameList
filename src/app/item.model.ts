export interface Item {
    titulo: string;
    id: string
    descricao?: string;
    status: 'pendente' | 'feito' | 'em andamento' | 'ativo' | 'inativo';
    imagemUrl?: string;
    nota: number;
  }
  