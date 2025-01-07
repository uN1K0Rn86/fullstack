import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterWith, setFilterWith] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
        .then(initialCountries => {
          setCountries(initialCountries)
        })
  }, [])

  const handleFilterChange = (event) => {
    setFilterWith(event.target.value)
  }

  const filteredCountries = filterWith
    ? countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterWith.toLowerCase())
      )
    : []

  return (
    <div>
      <h1>Countries</h1>
      <div>
        <input
          placeholder="Filter countries"
          value={filterWith}
          onChange={handleFilterChange}
        />
      </div>
      <Countries filteredCountries={filteredCountries} />
    </div>
  )
}

export default App
