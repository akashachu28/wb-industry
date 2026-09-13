import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://106.51.226.42:4561',
  timeout: 60000, // 60 seconds timeout for chat responses
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Making request to:', (config.baseURL || '') + (config.url || ''))
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error('API Error:', error.response.status, error.response.data)
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.message)
    } else {
      // Error in request setup
      console.error('Error:', error.message)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
