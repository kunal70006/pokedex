import PokemonCard from '../PokemonCard'
import { ChangeEvent, useState, useEffect } from 'react'
import { HomepageProps, PokemonDataProps } from '../../types'
import Modal from '../DetailsModal/Modal'
import Search from '../Search'
import { TYPE_COLOR } from '../../utils'

const HomeComp = ({
  pokemonData,
  selectedValue,
  handleSelectChange,
}: HomepageProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currPokemon, setCurrPokemon] = useState<PokemonDataProps>()
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [pokemonTypes, setPokemonTypes] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  useEffect(() => {
    if (pokemonData) {
      const ids: string[] = []
      pokemonData.map((item) => {
        item.types?.map((i) => {
          if (!ids.includes(i.type.name)) ids.push(i.type.name)
        })
      })
      setPokemonTypes(ids)
    }
  }, [pokemonData])

  const handleClose = () => setIsModalOpen(false)
  const handleOpen = () => setIsModalOpen(true)

  const handleCurrPokemon = (pok: PokemonDataProps) => setCurrPokemon(pok)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value)

  const handleCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.name
    if (!selectedTypes.includes(val)) {
      setSelectedTypes((t) => [...t, val])
    } else {
      const res = selectedTypes.filter((t) => t !== val)
      setSelectedTypes(res)
    }
  }

  // console.log(selectedTypes)
  if (!pokemonData) return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl lg:text-6xl text-center pt-5 font-semibold">
        POKEMONS
      </h1>
      <Search query={searchQuery} handleChange={handleChange} />
      <div
        className={`flex mt-8 flex-wrap w-full ${
          pokemonTypes.length > 7 ? 'md:w-full md:px-20' : 'md:w-1/2'
        } justify-between`}
      >
        {pokemonTypes.map((type, id) => (
          <div className="flex items-center" key={id}>
            <p
              className="px-2 py-0.5 mr-2 font-semibold rounded-lg"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              style={{ backgroundColor: TYPE_COLOR[type] }}
            >
              {type}
            </p>
            <input
              type="checkbox"
              name={type}
              onChange={handleCheckboxClick}
              checked={selectedTypes.includes(type)}
            />
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <Modal handleClose={handleClose} pokemon={currPokemon} />
      ) : null}
      <div
        className={`h-full w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-8 py-20 px-4 md:px-8 lg:px-20`}
      >
        {pokemonData.map((pokemon, id) => {
          if (
            (selectedTypes.length === 0 &&
              pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            pokemon.types?.some((t) => selectedTypes.indexOf(t.type.name) >= 0)
          ) {
            return (
              <PokemonCard
                key={id}
                pokemon={pokemon}
                handleOpen={handleOpen}
                handleCurrPok={handleCurrPokemon}
              />
            )
          }
        })}
      </div>
      <div className="flex w-full px-4 md:px-8 lg:px-20 items-start">
        <h1 className="text-lg">Items per page: </h1>
        <select
          value={selectedValue}
          onChange={handleSelectChange}
          className="mb-4 ml-4 w-20 rounded-lg text-lg px-2 mt-1"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  )
}

export default HomeComp
