const alimentos = [
    {
        nome: "Maçã",
        cor: "Vermelha",
        peso: 0.2,
        tipo: "fruta"
    },
    {
        nome: "Alface",
        cor: "Verde",
        peso: 0.1,
        tipo: "verdura"
    },
    {
        nome: "Tomate",
        cor: "Vermelho",
        peso: 0.3,
        tipo: "fruta"
    },
    {
        nome: "Cenoura",
        cor: "Laranja",
        peso: 0.15,
        tipo: "legume"
    },
    {
        nome: "Banana",
        cor: "Amarela",
        peso: 0.15,
        tipo: "fruta"
    }
];

console.log(alimentos);

function exibir(alimentos) {
    alimentos.forEach(function (alimento) {
        if (alimento.tipo === "fruta") {
            console.log(alimento.nome);
        }
    });
}

exibir(alimentos);

function contar(alimentos) {
    let contFrutas = 0;
    let contVerduras = 0;
    let contLegumes = 0;

    alimentos.forEach(function(alimento) {
        if (alimento.tipo === "fruta") {
            contFrutas++;
        } else if (alimento.tipo === "verdura") {
            contVerduras++;
        } else if (alimento.tipo === "legume") {
            contLegumes++;
        }
    });

    console.log(`Quantidade de frutas: ${contFrutas}`);
    console.log(`Quantidade de verduras: ${contVerduras}`);
    console.log(`Quantidade de legumes: ${contLegumes}`);
}

contar(alimentos)