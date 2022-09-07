import Image from 'next/image'
import { HomepageProps } from '../../types'
import { capitalizeString, TYPE_COLOR } from '../../utils'

const HomeComp = ({ pokemonData }: HomepageProps) => {
  return (
    <>
      <h1 className="text-4xl lg:text-6xl text-center pt-5 font-semibold">
        POKEMONS
      </h1>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-8 py-20 px-4 md:px-8 lg:px-20">
        {pokemonData.map((pokemon, id) => (
          <div
            className="bg-white drop-shadow-lg  transition-transform hover:drop-shadow-xl hover:-translate-y-4 rounded-lg px-4 py-2 flex flex-col items-center"
            key={id}
          >
            <Image
              src={pokemon.avatar as string}
              alt="avatar."
              width={128}
              height={128}
              className="cursor-pointer"
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
              <p className="px-2 py-0.5 bg-slate-200 rounded-lg">
                {pokemon.baseExp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HomeComp
