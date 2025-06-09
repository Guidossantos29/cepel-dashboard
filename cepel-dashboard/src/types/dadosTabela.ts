export interface Atendente {
  "grupo/atendente": string;
  pendenteIncidente: number;
  pendenteRequisicao: number;
  atendimentoIncidente: number;
  atendimentoRequisicao: number;
  vencidoIncidente: number;
  vencidoRequisicao: number;
  demanda: number;
}

export interface Grupo {
  "grupo/atendente": string;
  pendenteIncidente: number;
  pendenteRequisicao: number;
  atendimentoIncidente: number;
  atendimentoRequisicao: number;
  vencidoIncidente: number;
  vencidoRequisicao: number;
  demanda: number;
  atendentes: Atendente[];
}
