import React from 'react'
import { SearchProps } from '../../types'

const Search = ({ handleChange, query }: SearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search for a Pokemon..."
      onChange={handleChange}
      value={query}
      className="w-1/2 md:w-1/3 mx-4 md:mx-8 lg:mx-20 mt-10 px-4 py-1 rounded-lg outline-none text-lg drop-shadow-lg"
    />
  )
}

export default Search
