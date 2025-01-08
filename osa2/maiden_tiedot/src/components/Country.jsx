import Languages from "./Languages"
import Weather from "./Weather"

const Country = ({ country }) => {
    const languages = Object.values(country.languages)

    let lat, lon
    if (country.capitalInfo.latlng) {
        lat = country.capitalInfo.latlng[0]
        lon = country.capitalInfo.latlng[1]
    } else {
        lat = country.latlng[0]
        lon = country.latlng[1]
    }

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>
                Capital {country.capital} <br />
                Area {country.area}
            </p>
            <Languages languages={languages} />
            <ul></ul>
            <p><img
                    src={country.flags.png}
                    style={{ border: '5px solid black' }}
                />
            </p>
            <Weather
                lat={lat}
                lon={lon}
            />
        </div>
    )
}

export default Country
