import { useState } from 'react'

const SearchComponent = ({ makeQuery }) => {
  const [value, setValue] = useState('Matrix')
  const handleSearch = () => {
    if (value.length) {
      makeQuery(value)
    }
  }

  return (
    <div className="search">
      <input
        className="input"
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setValue(e.target.value)}
        placeholder="Find your favourite film"
      />
      <button className="button" onClick={(e) => handleSearch(value)}>
        Search
      </button>
    </div>
  )
}

export default SearchComponent
