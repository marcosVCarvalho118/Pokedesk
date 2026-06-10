function getStat(stats, nome){
  return stats.find(s => s.stat.name === nome)?.base_stat ?? 0;
}

function PokemonCard({ info, cores }) {
  const tipoPrincipal = info.types[0].type.name;
  const cor = cores[tipoPrincipal] ?? "#555";

  const imagem =
    info.sprites?.other?.["official-artwork"]?.front_default ||
    info.sprites?.front_default ||
    "";

  return (
    <div
      className="card"
      style={{
        background: `linear-gradient(135deg, ${cor}, ${cor}CC)`
      }}
    >
      <img src={imagem} alt={info.name} />

      <h2>{info.name.charAt(0).toUpperCase() + info.name.slice(1)}</h2>

      <div className="tipo">
        {info.types.map(t => t.type.name).join(" • ")}
      </div>

      <div className="info">
        <p>❤️ HP: {getStat(info.stats, "hp")}</p>
        <p>⚔️ Ataque: {getStat(info.stats, "attack")}</p>
        <p>🛡️ Defesa: {getStat(info.stats, "defense")}</p>
        <p>⚡ Velocidade: {getStat(info.stats, "speed")}</p>
        <p>📏 Altura: {info.height / 10} m</p>
        <p>⚖️ Peso: {info.weight / 10} kg</p>
      </div>
    </div>
  );
}

export default PokemonCard;