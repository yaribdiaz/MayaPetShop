import useCart from "../hooks/useCart"

const SearchBar = () => {

    const {setSearch, search} = useCart()

    // const [search, setSearch] = useState('')
    

    const cleanBar = e => {
        e.preventDefault()
        setSearch('')
    }

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/5 lg:w-2/5 mb-12 flex ">
        <input 
            type="text"
            placeholder="Buscar..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            className="w-full rounded-l shadow-lg py-2 md:py-1 focus:outline-none px-2 font-semibold"
        />

        {search && (
        <button 
            type="button"
            onClick={cleanBar}
            className= {`transition-opacity duration-500 rounded-r bg-gray-500 hover:bg-gray-600 text-white px-5 ${search ? 'opacity-100' : 'opacity-10'} `}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
      
        )}

      </div>
    </div>
  )
}

export default SearchBar
