import axios from 'axios'

//API
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const key = '11c586af6b770533a66a7601a9726c0d'

function getCity(city: string){
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`

  return axios.get(url)
  
}

function getCityWeather(lat: number, lon: number){
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

  return axios.get(url)
}


export default{
  getCity, 
  getCityWeather,
}