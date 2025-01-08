import Country from "./Country"

const Countries = ({ filteredCountries, selectedCountry, handleSelectedCountry }) => {
    if (filteredCountries.length > 10) {
        return (
            <div>Too many matches, please specify further</div>
        )
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        return (
            <div>
            {filteredCountries.map(country =>(
                <div key={country.cca3}>
                    {country.name.common} <button onClick={() => handleSelectedCountry(country)}>Show</button>
                </div>
            ))}
            {selectedCountry && <Country country={selectedCountry} />}
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
