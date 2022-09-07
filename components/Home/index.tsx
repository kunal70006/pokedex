import PokemonCard from '../PokemonCard'
import { useState } from 'react'
import { HomepageProps, PokemonDataProps } from '../../types'
import Modal from '../DetailsModal/Modal'

const HomeComp = ({ pokemonData }: HomepageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currPokemon, setCurrPokemon] = useState<PokemonDataProps>()

  const handleClose = () => setIsModalOpen(false)
  const handleOpen = () => setIsModalOpen(true)

  const handleCurrPokemon = (pok: PokemonDataProps) => setCurrPokemon(pok)

  return (
    <>
      <h1 className="text-4xl lg:text-6xl text-center pt-5 font-semibold">
        POKEMONS
      </h1>
      {isModalOpen ? (
        <Modal handleClose={handleClose} pokemon={currPokemon} />
      ) : null}
      <div
        className={`h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-8 py-20 px-4 md:px-8 lg:px-20`}
      >
        {pokemonData.map((pokemon, id) => (
          <PokemonCard
            key={id}
            pokemon={pokemon}
            handleOpen={handleOpen}
            handleCurrPok={handleCurrPokemon}
          />
        ))}
      </div>
    </>
  )
}

export default HomeComp
