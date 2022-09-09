import Image from 'next/image'
import { ModalProps } from '../../types'
import { capitalizeString, TYPE_COLOR } from '../../utils'

const Modal = ({ handleClose, pokemon }: ModalProps) => {
  // console.log(pokemon)

  return (
    <div className="flex fixed px-8 lg:p-0 top-0 left-0 z-[999] w-full min-h-screen bg-black/50 items-center justify-center">
      <div className="flex flex-col w-full lg:w-1/2 bg-white rounded-lg p-8">
        <p
          className="text-3xl cursor-pointer bg-slate-200 rounded-full w-fit px-4 py-2 drop-shadow-lg"
          onClick={handleClose}
        >
          X
        </p>
        <div
          className="flex w-full justify-center my-4 rounded-lg"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={{ backgroundColor: TYPE_COLOR[pokemon?.types[0].type.name] }}
        >
          <Image
            src={pokemon?.avatar as string}
            alt="avatar"
            height={84}
            width={84}
          />
        </div>
        <div className="flex w-full justify-around mt-4 text-xl">
          <div>
            <h1 className="text-2xl font-semibold">Statistics:</h1>
            {pokemon?.stats?.map((stat, id) => (
              <div className="" key={id}>
                <p>
                  <span className=" font-medium">
                    {capitalizeString(stat.stat.name)}:
                  </span>{' '}
                  {stat.base_stat}{' '}
                </p>
              </div>
            ))}
          </div>
          <h1>
            <span className="text-2xl font-semibold"> Weight</span>:{' '}
            {pokemon?.weight}
          </h1>
          <div>
            <h1 className="text-2xl font-semibold">Abilities: </h1>
            {pokemon?.abilities?.map((ab, id) => (
              <p key={id}>{capitalizeString(ab.ability.name)}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
