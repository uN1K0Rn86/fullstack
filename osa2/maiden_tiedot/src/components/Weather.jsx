import { useState, useEffect } from "react"
import weatherService from '../services/weather'

const Weather = ({ lat, lon }) => {
    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        weatherService
            .getAll({ lat, lon })
                .then(initialWeather => {
                    setWeatherInfo(initialWeather)
                })
    })

    if (!weatherInfo) {
        return
    }

    const temperature = weatherInfo.main.temp - 273.15
    const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`
    const wind = weatherInfo.wind.speed

    return (
        <div>
            Temperature {temperature.toFixed(2)} {'\u00B0'}C <br />
            <img src={iconUrl} /><br />
            Wind {wind.toFixed(2)}
        </div>
    )
}

export default Weather
