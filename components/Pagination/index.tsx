import { PaginationProps } from '../../types'
import Link from 'next/link'

const Pagination = ({ total }: PaginationProps) => {
  const arr = Array.from(Array(total).keys())
  return (
    <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-20">
      {arr.map((i) => (
        <Link key={i} href={`/${i}`}>
          <a
            className={`text-lg ml-2 px-2 bg-white rounded-lg mb-2 cursor-pointer drop-shadow-lg transition-transform hover:-translate-y-2 ${
              i === 0 ? 'hidden' : 'block'
            }`}
          >
            {i}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Pagination
