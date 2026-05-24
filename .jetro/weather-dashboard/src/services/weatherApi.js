import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getCurrentWeather = async (city) => {
  const response = await API.get(`/weather/${city}`);
  return response.data;
};

export const getForecast = async (city, days = 7) => {
  const response = await API.get(`/forecast/${city}/${days}`);
  return response.data;
};


export const getAnalytics = async () => {
  const response = await API.get('/analytics');
  return response.data;
};