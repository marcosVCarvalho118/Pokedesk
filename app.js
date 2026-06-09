const container = document.getElementById("pokemon-container");

const cores = {
    fire:"#F08030",
    water:"#6890F0",
    grass:"#78C850",
    electric:"#F8D030",
    psychic:"#F85888",
    ice:"#98D8D8",
    dragon:"#7038F8",
    dark:"#705848",
    fairy:"#EE99AC",
    fighting:"#C03028",
    poison:"#A040A0",
    ground:"#E0C068",
    flying:"#A890F0",
    bug:"#A8B820",
    rock:"#B8A038",
    ghost:"#705898",
    steel:"#B8B8D0",
    normal:"#A8A878"
};

/* Função segura para pegar stats */
function getStat(stats, nome){
    return stats.find(s => s.stat.name === nome)?.base_stat ?? 0;
}

/* Criação do card */
function criarCard(info){

    const tipoPrincipal = info.types[0].type.name;

    const cor = cores[tipoPrincipal] ?? "#555";

    const imagem =
        info.sprites?.other?.["official-artwork"]?.front_default ||
        info.sprites?.front_default ||
        "";

    const card = document.createElement("div");
    card.classList.add("card");

    /* Gradiente mais visível */
    card.style.background = `linear-gradient(135deg, ${cor}, ${cor}CC)`;

    card.innerHTML = `
        <img src="${imagem}" alt="${info.name}">

        <h2>${info.name}</h2>

        <div class="tipo">
            ${info.types.map(t => t.type.name).join(" • ")}
        </div>

        <div class="info">
            <p>❤️ HP: ${getStat(info.stats, "hp")}</p>
            <p>⚔️ Ataque: ${getStat(info.stats, "attack")}</p>
            <p>🛡️ Defesa: ${getStat(info.stats, "defense")}</p>
            <p>⚡ Velocidade: ${getStat(info.stats, "speed")}</p>
            <p>📏 Altura: ${info.height / 10} m</p>
            <p>⚖️ Peso: ${info.weight / 10} kg</p>
        </div>
    `;

    return card;
}

/* Função principal */
async function carregarPokemons(){

    container.innerHTML = "<p>Carregando...</p>";

    try{
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

        if(!resposta.ok){
            throw new Error("Erro na API");
        }

        const dados = await resposta.json();

        container.innerHTML = "";

        /* Busca todos os detalhes */
        const promessas = dados.results.map(pokemon =>
            fetch(pokemon.url).then(res => res.json())
        );

        const pokemons = await Promise.all(promessas);

        pokemons.forEach(info => {
            const card = criarCard(info);
            container.appendChild(card);
        });

    }catch(erro){
        console.error("Erro ao carregar Pokémon:", erro);
        container.innerHTML = "<h2>Erro ao carregar dados.</h2>";
    }
}

/* Inicialização */
carregarPokemons();