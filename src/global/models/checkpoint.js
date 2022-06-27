export class checkpoint {

  id;
  titulo;
  descricao;
  desafio;
  fonte;
  resposta;

  constructor(id, titulo, descricao, desafio, fonte, resposta) {

    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.desafio = desafio;
    this.fonte = fonte;
    this.resposta = resposta;
  }
}