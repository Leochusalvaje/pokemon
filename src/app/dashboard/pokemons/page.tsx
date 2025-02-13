import { PokemonsResponse, SimplePokemon } from '@/app/pokemons';
import  Tarjeta  from '@/app/components/tarjeta';

const getPokemons = async (limit = 20, offset = 0) => {

const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then((res) => res.json())
  .then((json) => {
    console.log("Datos obtenidos:", json);
    return json;
  });


  const pokemons = data.results.map((pokemon) => {
    const id = pokemon.url.split('/').at(-2); // Extraemos el ID de la URL
    return {
      id: id,
      name: pokemon.name,
      urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`, // Generamos la URL de la imagen
      url:`https://pokeapi.co/api/v2/pokemon/${id}/`
    
    };
  });

  return pokemons;
};

console.log(getPokemons)

export default async function PokemonsPage() {
  const pokemons = await getPokemons(30);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estático</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          // Aquí usamos el componente Tarjeta pasando los props que necesita
          <Tarjeta key={pokemon.id} name={pokemon.name} urlImage={pokemon.urlImage} urlPok={pokemon.url} />
        ))}
      </div>
    </div>
  );
}
