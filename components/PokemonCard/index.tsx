import Image from 'next/image'
import { PokemonCardProps } from '../../types'
import { capitalizeString, TYPE_COLOR } from '../../utils'

const PokemonCard = ({
  pokemon,
  handleOpen,
  handleCurrPok,
}: PokemonCardProps) => {
  //   console.log(pokemon)

  return (
    <div
      onClick={() => handleCurrPok(pokemon)}
      className="bg-white drop-shadow-lg  transition-transform hover:drop-shadow-xl hover:-translate-y-4 rounded-lg px-4 py-2 flex flex-col items-center"
    >
      <Image
        src={pokemon.avatar as string}
        alt="avatar."
        width={128}
        height={128}
        className="cursor-pointer"
        onClick={handleOpen}
      />
      <div className="w-full mt-4 flex justify-between text-lg items-center">
        <p className="px-2 py-0.5 bg-slate-200 rounded-lg">
          {capitalizeString(pokemon.name)}
        </p>
        {/* <div className="flex w-1/3"> */}
        {pokemon.types?.map((t, i) => (
          <p
            className="px-2 py-0.5  rounded-lg mr-2"
            key={i}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            style={{ backgroundColor: TYPE_COLOR[t.type.name] }}
          >
            {capitalizeString(t.type.name)}
          </p>
        ))}
        {/* </div> */}
        <p className="px-2 py-0.5 bg-slate-200 rounded-lg">{pokemon.baseExp}</p>
      </div>
    </div>
  )
}

export default PokemonCard
