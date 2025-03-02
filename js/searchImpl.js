let section = document.getElementById("result-panel");
let sectionResult = document.getElementById("search-count");
let priceInput = document.getElementById("price-input")
let countGlobal = 0;
let loadedItems = 40; // Inicialmente exibe 20 itens

priceInput.addEventListener("input", function (event) {
    // Remove tudo que não for número
    let value = event.target.value.replace(/\D/g, "");

    // Verifica o comprimento para evitar valores extremamente grandes
    if (value.length > 15) {  // Limite de 15 dígitos
        value = value.slice(0, 15);  // Limita a 15 dígitos
    }

    // Formata o número com separadores de milhar
    let formattedValue = new Intl.NumberFormat('pt-BR').format(value);

    // Atualiza o valor no input
    event.target.value = formattedValue;
});

search();

// Chama a função sempre que algo é digitado
document.addEventListener('keyup', function () {
    loadedItems = 40; // Resetar quando uma nova busca for feita
    search();
});

// Chama a função ao mudar o preço máximo
document.getElementById("price-input").addEventListener("input", function () {
    loadedItems = 40;
    search();
});

function search() {
    let campoPesquisa = document.getElementById("input-search").value.toLowerCase();
    let selectionRarity = document.getElementById("selecao").value;
    let maxPrice = parseInt(document.getElementById("price-input").value.replace(/\D/g, "")) || Infinity; // Captura o valor do input de preço e remove caracteres não numéricos
    let result = "";
    let nome = "";
    countGlobal = 0;

    let filteredItems = database.filter(db => {
        let itemPrice = parseInt(db.preco.replace(/\D/g, "")); // Remove pontos e vírgulas e converte para número
        return (
            db.nome.toLowerCase().includes(campoPesquisa) &&
            db.raridade.includes(selectionRarity) &&
            itemPrice <= maxPrice
        );
    });

    countGlobal = filteredItems.length; // Total de itens encontrados
    let displayedItems = filteredItems.slice(0, loadedItems); // Exibir somente os primeiros 20

    displayedItems.forEach(db => {
        result += `
        <div id="item" class="parent">
            <div id="item-canvas">
                <img src="img/items/${db.img}" alt="img-item" style="background-color: #${db.fundo};">
            </div>
            <p>${db.nome}${db.side}</p>
            <p>Rarity: ${db.raridade}</p>
            <p>Price: ${db.preco}<img id="gold-icon" src="img/gold.png"></p>
            <p>Listed by: <a href="https://www.rucoyonline.com/characters/${db.jogador}">${db.jogador}</a></p>
            <div id="actions-item">
                <p class="btn-buy" style="width: 50%; margin: 0 auto; background-color: green; border-radius: 5px; cursor: pointer; user-select: none">Buy</p>
            </div>
        </div>
        `;
    });

    // Atualiza a contagem de itens encontrados
    sectionResult.innerHTML = countGlobal > 0 ? `<p>${countGlobal} items found.</p>` : `<p>No items found.</p>`;

    section.innerHTML = result;

    // Se houver mais itens para carregar, exibe um botão "Carregar mais"
    if (loadedItems < countGlobal) {
        section.innerHTML += `<button id="load-more" style="margin: 10px auto; display: block; background-color: #007bff; color: white; border: none; padding: 10px; cursor: pointer; border-radius: 5px;">Load More</button>`;

        document.getElementById("load-more").addEventListener("click", function () {
            loadedItems += 20; // Exibir mais 20 itens ao clicar
            search();
        });
    }

    if (!result) {
        section.innerHTML = `<p>No items found.</p>`;
    }

    // Adiciona evento de clique aos botões "Buy"
    document.querySelectorAll(".btn-buy").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".parent").style.display = "none";
            countGlobal--;
            updateCount();
        });
    });
}

// Função para atualizar a contagem de itens
function updateCount() {
    sectionResult.innerHTML = countGlobal > 0 ? `<p>${countGlobal} items found.</p>` : `<p>No items found.</p>`;

    if (countGlobal === 0) {
        section.innerHTML = `<p>No items found.</p>`;
    }
}
