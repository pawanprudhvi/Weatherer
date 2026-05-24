import { useState } from 'react';

import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ComparisonDashboard from './components/ComparisonDashboard';

import {
  getForecast,
  getAnalytics
} from './services/weatherApi';

export default function App() {

  const [weather, setWeather] = useState(null);
  const [analytics, setAnalytics] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {

    try {

      setLoading(true);
      setError('');
      setWeather(null);

      const response = await getForecast(city, 7);

      // IMPORTANT
      const weatherData = response.data;

      // WEATHER API ERROR
      if (weatherData.error) {

        setError(
          weatherData.error.message
        );

        return;
      }

      // SUCCESS
      setWeather(weatherData);

      const analyticsData =
        await getAnalytics();

      setAnalytics(analyticsData);

    } catch (err) {

      setError(
        'Failed to fetch weather data'
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      overflow-hidden
      bg-[#060816]
      text-white
      relative
      "
    >

      {/* Background Glow */}
      <div className="absolute top-[-180px] left-[-120px] w-[420px] h-[420px] bg-orange-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-120px] w-[420px] h-[420px] bg-indigo-500/20 blur-[120px] rounded-full" />

      {/* NAVBAR */}
      <nav
        className="
        fixed
        top-0
        left-0
        right-0
        z-50
        h-[70px]
        border-b
        border-white/10
        bg-[#060816]/70
        backdrop-blur-2xl
        "
      >

        <div
          className="
          max-w-[1180px]
          mx-auto
          h-full
          px-5
          flex
          items-center
          justify-between
          "
        >

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div
              className="
              w-10
              h-10
              rounded-2xl
              bg-gradient-to-br
              from-orange-400
              to-orange-600
              flex
              items-center
              justify-center
              shadow-lg
              shadow-orange-500/30
              "
            >
              🌤️
            </div>

            <div>

              <h1 className="text-lg font-black tracking-tight">
                Weatherer
              </h1>

              <p className="text-[10px] text-slate-400">
                Weather Intelligence
              </p>

            </div>

          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-7">

          </div>

        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main
        className="
        relative
        z-10
        max-w-[1180px]
        mx-auto
        px-5
        pt-[95px]
        pb-6
        "
      >

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-4xl md:text-5xl font-black leading-tight">

            Weather
            <span className="text-orange-400">
              {' '}Dashboard
            </span>

          </h1>

          <p className="text-slate-400 mt-2 text-base">
            Real-time weather intelligence and forecasting
          </p>

        </div>

        {/* SEARCH */}
        <div
          className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-[28px]
          p-3
          mb-6
          shadow-2xl
          "
        >
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* LOADING */}
        {loading && (

          <div
            className="
            flex
            items-center
            justify-center
            h-[240px]
            bg-white/5
            rounded-[28px]
            border
            border-white/10
            backdrop-blur-xl
            "
          >

            <div className="text-center">

              <div className="w-14 h-14 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto" />

              <p className="mt-4 text-slate-300">
                Fetching weather intelligence...
              </p>

            </div>

          </div>
        )}

        {/* ERROR */}
        {error && (

          <div
            className="
            bg-red-500/10
            border
            border-red-500/30
            text-red-300
            rounded-[28px]
            p-5
            "
          >
            {error}
          </div>
        )}

        {/* DASHBOARD */}
        {weather && (

          <div className="space-y-5">

            {/* MAIN WEATHER */}
            <div
              className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[28px]
              p-5
              shadow-2xl
              "
            >
              <WeatherCard data={weather} />
            </div>

            {/* ANALYTICS */}
            <AnalyticsDashboard weather={weather} />

            {/* COMPARISON */}
            <ComparisonDashboard cities={analytics} />

          </div>
        )}

      </main>
    </div>
  );
}