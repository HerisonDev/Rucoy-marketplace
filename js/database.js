let database = [];
let itens = [
    "DragonArmor", "DragonBelt", "DragonBoots", "DragonHelmet", "DragonLegs", "DragonShield", "DragonSlayer",
    "DrowBow", "DrowWand", "SoldierShield",
    "FrozenBow", "FrozenLegs", "FrozenLightArmor", "FrozenSword", "FrozenWand", "FrozenHood",
    "GargoyleArmor", "GargoyleHelmet", "GargoyleQuiver", "GargoyleShield",
    "GoldenArmor", "GoldenBoots", "GoldenHelmet", "GoldenSword",
    "LavaLegs",
    "LeatherBoots",
    "LizardArmor", "LizardHelmet", "LizardRobe", "LizardShield", "LizardWand",
    "MinotaurLightArmor",
    "TitanBoots", "TitanLegs"
];

let raridades = [
    { tipo: "Common", fundo: "1c180d" },
    { tipo: "Uncommon", fundo: "42a24d" },
    { tipo: "Rare", fundo: "41bbd4" },
    { tipo: "Ultra rare", fundo: "800080" },
    { tipo: "Legendary", fundo: "bac910" },
    { tipo: "Mythic", fundo: "FFA500" }
];

let jogadores = ["ajg", "Rgy", "Chatgpt", "Youtube", "Kritical", "Dhrj", "Dfur", "Jfeo", "Prid", "Abc","Cobra","Xuxa","Neymar","Messi","Ribamar","Leticia","Flavin"];

// Criando 100 itens, repetindo os nomes fornecidos
for (let i = 0; i < 1327; i++) {
    let nomeBase = itens[i % itens.length]; // Pegando um nome da lista
    let nomeFormatado = nomeBase.replace(/([A-Z])/g, ' $1').trim(); // Formatando para "Dragon Armor"
    let raridade = raridades[Math.floor(Math.random() * raridades.length)]; // Escolhendo raridade aleatória
    let jogador = jogadores[Math.floor(Math.random() * jogadores.length)]; // Escolhendo jogador aleatório

    // Gerando preço aleatório entre 10.000.000 e 88.000.000
    let preco = Math.floor(Math.random() * (261 - 10 + 1) + 1) * 100_000;
    preco = preco.toLocaleString("pt-BR"); // Formata corretamente com pontos

    database.push({
        nome: nomeFormatado,
        side: "",
        img: nomeBase + ".png",
        raridade: raridade.tipo,
        fundo: raridade.fundo,
        preco: preco,
        jogador: jogador
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
}

shuffleArray(database);


