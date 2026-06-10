import { useEffect, useState } from "react";
import "./styles.css";
import PokemonCard from "./components/PokemonCard";

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

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarPokemons() {
      try {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

        if (!resposta.ok) throw new Error("Erro na API");

        const dados = await resposta.json();

        const promessas = dados.results.map(p =>
          fetch(p.url).then(res => res.json())
        );

        const lista = await Promise.all(promessas);

        setPokemons(lista);
      } catch (e) {
        console.error(e);
        setErro(true);
      } finally {
        setLoading(false);
      }
    }

    carregarPokemons();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (erro) return <h2>Erro ao carregar dados.</h2>;

  return (
    <div>
      <header>
        <h1>PokeDesk</h1>
      </header>

      <main>
        <div className="pokemon-container">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} info={pokemon} cores={cores} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;