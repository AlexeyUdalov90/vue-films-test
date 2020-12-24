import axios from 'axios'

export async function getAllMovies () {
  try {
    const response = await axios.get('https://floating-sierra-20135.herokuapp.com/api/movies')
    return response.data
  } catch (err) {
    throw new Error(err.message)
  }
}

export async function getMovie (id) {
  try {
    const response = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${id}`)
    return response.data
  } catch (err) {
    throw new Error(err.message)
  }
}
