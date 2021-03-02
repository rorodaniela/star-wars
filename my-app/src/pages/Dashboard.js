import Content from '../components/Content'
import useFetch from '../hooks/useFetch'
import {useState} from 'react'
import useDebounce from '../hooks/useDebounce'

export default function Dashboard() {
  const {actors, loading, error} = useFetch('all')
  const [search, setSearch] = useState('')
  const debounce = useDebounce((nextValue) => setSearch(nextValue), 1000);

  const onChangeSearch = (event) => {
    const {value: nextValue} = event.target
    debounce(nextValue)
  }

  const filtered = actors.filter(actor => {
    return actor.name.toLowerCase().includes(search.toLowerCase())
  })
  return(
    <div class="bg-fixed flex flex-wrap overflow-hidden lg:-mr-5 ">
      <div className="flex place-items-center flex-col w-full mt-10 mb-5">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <i class="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </i>
          </span>
          <input onChange={(event) =>  onChangeSearch(event)} type="search" name="q" class="w-96 h-10 py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off"/>
        </div>

      </div>
        {
          filtered.map(actor => {
            return <Content key={actor.id} actor={actor}/>
          })
        }
      <div className="flex flex-col">
      </div>
    </div>
  )
}



