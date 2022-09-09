export interface PokemonDataProps {
  name: string
  abilities?:
    | {
        ability: {
          name: string
        }
      }[]
    | null
  avatar: string | null
  baseExp: number | null
  weight?: number | null
  types:
    | {
        type: {
          name: string
        }
      }[]
    | null
  stats?:
    | {
        stat: {
          name: string
        }
        base_stat: number
      }[]
    | null
}

export interface PokemonCardProps {
  pokemon: PokemonDataProps
  handleOpen: () => void
  handleCurrPok: (pokemon: PokemonDataProps) => void
}

export interface HomepageProps {
  pokemonData: PokemonDataProps[]
  selectedValue: number
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface ModalProps {
  handleClose: () => void
  pokemon: PokemonDataProps | undefined
}

export interface SearchProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  query: string
}

export interface PaginationProps {
  total: number
}
