const Languages = ({ languages }) => {
    return (
        <div>
            <h3>Languages:</h3>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </div>
    )
}

export default Languages
