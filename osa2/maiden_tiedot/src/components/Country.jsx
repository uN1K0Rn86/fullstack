import Languages from "./Languages"

const Country = ({ country }) => {
    const languages = Object.values(country.languages)

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
                /></p>
        </div>
    )
}

export default Country
