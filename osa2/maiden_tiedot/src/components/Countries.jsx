import Country from "./Country"

const Countries = ({ filteredCountries }) => {
    if (filteredCountries.length > 10) {
        return (
            <div>Too many matches, please specify further</div>
        )
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return (
            <div>
            {filteredCountries.map(country =>(
                <div key={country.cca3}>{country.name.common}</div>
            ))}
            </div>
        )
    } else if (filteredCountries.length === 1) {
        return (
            <div>
                <Country country={filteredCountries[0]} />
            </div>
        )
    } else {
        return (
            <div>No matches found</div>
        )
    }
}

export default Countries
