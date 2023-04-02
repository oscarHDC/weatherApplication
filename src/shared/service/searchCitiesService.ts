import axios from 'axios'

//API
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function getCity(city: string){
  const key = '11c586af6b770533a66a7601a9726c0d'
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`

  return axios.get(url)
  
}


export default{
  getCity
}