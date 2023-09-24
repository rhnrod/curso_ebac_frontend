function Comida(nome, ingredientes, preco) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.preco = preco;
}

function Salgado(nome, ingredientes, preco) {
    Comida.call(this, nome, ingredientes, preco);
}

function Doce(nome, ingredientes, preco) {
    Comida.call(this, nome, ingredientes, preco);
}

const prato1 = new Doce('cocada', ['coco', 'leite condensado', 'açucar mascavo'], 5);
const prato2 = new Salgado('pizza', ['farinha de trigo', 'fermento', 'água', 'queijo', 'molho de tomate', 'linguiça calabresa'], 36);
const prato3 = new Doce('chocolate', ['cacau', 'açucar'], 8);

console.log(prato1);
console.log(`Prato 1 é uma instância de doce? ${prato1 instanceof Doce}`);
console.log(`Prato 1 é uma instância de salgado? ${prato1 instanceof Salgado}`);

console.log(prato2);
console.log(`Prato 2 é uma instância de doce? ${prato2 instanceof Doce}`);
console.log(`Prato 2 é uma instância de salgado? ${prato2 instanceof Salgado}`);

console.log(prato3);
console.log(`Prato 3 é uma instância de doce? ${prato3 instanceof Doce}`);
console.log(`Prato 3 é uma instância de salgado? ${prato3 instanceof Salgado}`);