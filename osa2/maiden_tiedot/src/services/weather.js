import axios from 'axios'

const api_key = import.meta.env.VITE_WEATHER_KEY

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const getAll = (props) => {
    const request = axios.get(`${baseUrl}lat=${props.lat}&lon=${props.lon}&appid=${api_key}`)
    return request.then(response => response.data)
}

export default { getAll }
