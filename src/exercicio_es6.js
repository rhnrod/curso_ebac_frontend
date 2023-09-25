const notasAlunos = [
    { nome: "Maurício", nota: 9 },
    { nome: "Aline", nota: 6.5 },
    { nome: "Pablo", nota: 3 },
    { nome: "Raiane", nota: 8 },
    { nome: "João", nota: 7 },
    { nome: "Alice", nota: 3.5 },
    { nome: "Jorge", nota: 10 },
    { nome: "Amanda", nota: 6 }
]

function notaMaiorQueCinco() {
    const notasAltas = notasAlunos.filter(notasAluno => (notasAluno.nota >= 6));
    console.log(notasAltas);
}

notaMaiorQueCinco();