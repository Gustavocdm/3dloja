export class Produto {

    constructor(
        public nome: string,
        public imagem: string,
        public descricao: string,
        public preco: number,
        public id?: number
    ) { }
}
