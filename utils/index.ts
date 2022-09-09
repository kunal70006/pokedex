import { PokemonDataProps } from '../types'

export const TYPE_COLOR = {
  normal: '#A8A878',
  water: '#6890F0',
  ice: '#86D1F3',
  grass: '#78c850',
  fire: '#F08030',
  dragon: '#7038F8',
  electric: '#F8D030',
  bug: '#A8B820',
  fairy: '#EE99AC',
  ground: '#E0C068',
  rock: '#B8A038',
  steel: '#42BD94',
  poison: '#A040A0',
  ghost: '#705898',
  dark: '#5A5979',
  flying: '#4A677D',
  fighting: '#994025',
  psychic: '#F85888',
}

export const capitalizeString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getPokemons = async (limit: number, page: number) => {
  const urlArr = []
  if (page === 1) {
    for (let i = 0; i < limit; i++) {
      urlArr.push(`${process.env.NEXT_PUBLIC_POKEMON_LIST}/${i + 1}`)
    }
  } else {
    for (let i = limit * (page - 1); i < limit * page; i++) {
      urlArr.push(`${process.env.NEXT_PUBLIC_POKEMON_LIST}/${i + 1}`)
    }
  }

  const requests = urlArr.map((url) => fetch(url))
  const responses = await Promise.all(requests)
  const promises = responses.map((res) => res.json())
  const finalRes = await Promise.all(promises)
  // console.log(finalRes)
  const pokemonArr: PokemonDataProps[] = []
  finalRes.map((pokemon) => {
    const temp = {
      name: pokemon.name,
      abilities: pokemon.abilities || null,
      baseExp: pokemon.base_experience || null,
      height: pokemon.height || null,
      avatar:
        pokemon.sprites.other.dream_world.front_default ||
        pokemon.sprites.front_default ||
        pokemon.sprites.back_default ||
        pokemon.sprites.back_female ||
        null,
      stats: pokemon.stats || null,
      types: pokemon.types || null,
      weight: pokemon.weight || null,
    }
    pokemonArr.push(temp)
  })
  return pokemonArr
}
