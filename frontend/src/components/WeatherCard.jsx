import ForecastCard from './ForecastCard';

export default function WeatherCard({ data }) {

  const today = data.forecast.forecastday[0];

  return (
    <div className="grid grid-cols-12 gap-6">

      {/* LEFT COLUMN */}
      <div className="col-span-12 xl:col-span-3 space-y-6">

        {/* HERO CARD */}
        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          p-6
          bg-gradient-to-br
          from-orange-400
          via-orange-500
          to-orange-600
          shadow-[0_20px_60px_rgba(255,140,0,0.35)]
          min-h-[320px]
          "
        >

          <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="flex justify-between items-start">

              <div>
                <p className="text-white/80 text-sm">
                  {data.location.country}
                </p>

                <h2 className="text-3xl font-black mt-1">
                  {data.location.name}
                </h2>
              </div>

              <img
                src={data.current.condition.icon}
                alt="weather"
                className="w-20 h-20"
              />
            </div>

            <div className="mt-10">

              <h1 className="text-7xl font-black tracking-tight">
                {Math.round(data.current.temp_c)}°
              </h1>

              <p className="text-xl text-white/90 mt-2">
                {data.current.condition.text}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-8">

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3">
                <p className="text-xs text-white/70">
                  Humidity
                </p>

                <h3 className="text-lg font-bold mt-1">
                  {data.current.humidity}%
                </h3>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3">
                <p className="text-xs text-white/70">
                  Wind
                </p>

                <h3 className="text-lg font-bold mt-1">
                  {data.current.wind_kph}
                </h3>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-3">
                <p className="text-xs text-white/70">
                  UV
                </p>

                <h3 className="text-lg font-bold mt-1">
                  {data.current.uv}
                </h3>
              </div>

            </div>
          </div>
        </div>

        {/* METRIC GRID */}
        <div className="grid grid-cols-2 gap-4">

          <MetricCard
            title="Visibility"
            value={`${data.current.vis_km} km`}
          />

          <MetricCard
            title="Pressure"
            value={`${data.current.pressure_mb}`}
          />

          <MetricCard
            title="Feels Like"
            value={`${data.current.feelslike_c}°`}
          />

          <MetricCard
            title="Cloud"
            value={`${data.current.cloud}%`}
          />

        </div>

      </div>

      {/* CENTER COLUMN */}
      <div className="col-span-12 xl:col-span-6 space-y-6">

        {/* FORECAST STRIP */}
        <div
          className="
          bg-[#0d1325]
          border
          border-white/10
          rounded-[32px]
          p-6
          "
        >

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-black">
              Weekly Forecast
            </h2>

            <p className="text-slate-400">
              7 Days
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">

            {data.forecast.forecastday.map((day) => (
              <ForecastCard
                key={day.date}
                day={day}
              />
            ))}

          </div>
        </div>

        {/* CHART AREA */}
        <div
          className="
          bg-[#0d1325]
          border
          border-white/10
          rounded-[32px]
          p-6
          min-h-[280px]
          "
        >

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-black">
              Forecast Analytics
            </h2>

            <p className="text-orange-400">
              Live Data
            </p>
          </div>

          <div className="flex items-end justify-between h-[220px] gap-4">

            {data.forecast.forecastday.map((day) => {

              const temp = Math.round(day.day.avgtemp_c);

              return (

                <div
                  key={day.date}
                  className="flex flex-col items-center flex-1"
                >

                  {/* TEMPERATURE */}
                  <h3
                    className="
          text-3xl
          font-black
          text-white
          mb-3
          "
                  >
                    {temp}°
                  </h3>

                  {/* BAR */}
                  <div
                    className="
          w-full
          rounded-t-3xl
          bg-gradient-to-t
          from-orange-500
          to-orange-300
          shadow-[0_0_20px_rgba(255,115,0,0.35)]
          transition-all
          duration-300
          hover:scale-[1.03]
          "
                    style={{
                      height: `${temp * 5}px`
                    }}
                  />

                  {/* DAY */}
                  <p
                    className="
          mt-4
          text-sm
          text-slate-300
          font-medium
          "
                  >
                    {new Date(day.date).toLocaleDateString(
                      'en-US',
                      {
                        weekday: 'short'
                      }
                    )}
                  </p>

                </div>
              );
            })}

          </div>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="col-span-12 xl:col-span-3 space-y-6">

        {/* SUNRISE/SUNSET */}
        <div
          className="
          bg-[#0d1325]
          border
          border-white/10
          rounded-[32px]
          p-6
          "
        >

          <h2 className="text-2xl font-black mb-6">
            Sun Schedule
          </h2>

          <div className="space-y-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400 text-sm">
                  Sunrise
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  {today.astro.sunrise}
                </h3>
              </div>

              <span className="text-4xl">
                🌅
              </span>
            </div>

            <div className="flex items-center justify-between">

              <div>
                <p className="text-slate-400 text-sm">
                  Sunset
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  {today.astro.sunset}
                </h3>
              </div>

              <span className="text-4xl">
                🌇
              </span>
            </div>

          </div>
        </div>

        {/* RAIN CHANCES */}
        <div
          className="
          bg-[#0d1325]
          border
          border-white/10
          rounded-[32px]
          p-6
          "
        >

          <h2 className="text-2xl font-black mb-6">
            Rain Chances
          </h2>

          <div className="space-y-4">

            {data.forecast.forecastday.map((day) => (

              <div key={day.date}>

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-slate-400">
                    {new Date(day.date).toLocaleDateString('en-US', {
                      weekday: 'short'
                    })}
                  </span>

                  <span>
                    {day.day.daily_chance_of_rain}%
                  </span>
                </div>

                <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">

                  <div
                    className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-orange-400
                    to-orange-500
                    "
                    style={{
                      width: `${day.day.daily_chance_of_rain}%`
                    }}
                  />

                </div>

              </div>

            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div
      className="
      bg-[#0d1325]
      border
      border-white/10
      rounded-[24px]
      p-5
      "
    >

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-2xl font-black mt-3">
        {value}
      </h3>
    </div>
  );
}