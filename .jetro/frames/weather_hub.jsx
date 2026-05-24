export default function WeatherDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
                SkyFlow Weather Hub
              </h1>
              <p className="text-slate-400 mt-2">
                Live weather forecasts, alerts, analytics and city comparison.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Search city..."
                className="flex-1 h-12 rounded-2xl bg-slate-950 border border-slate-700 px-4 outline-none focus:border-indigo-500"
              />

              <button className="h-12 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
                Add City
              </button>

              <button className="h-12 px-6 rounded-2xl border border-red-500/40 text-red-400 hover:bg-red-500/10 transition font-semibold">
                Clear All
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Mumbai', 'London', 'Tokyo'].map((city) => (
                <div
                  key={city}
                  className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium"
                >
                  🌍 {city}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl border-l-4 border-red-500 bg-red-500/10 p-5">
            <div className="flex gap-4">
              <div className="text-3xl">🌧️</div>
              <div>
                <h3 className="font-bold text-lg">Heavy Rain Warning — Mumbai</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Mumbai · 90% chance of rain
                </p>
                <p className="mt-2 text-slate-300 text-sm leading-6">
                  Very high probability of heavy rainfall and possible flooding.
                  Carry waterproof gear and avoid low-lying areas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur hover:border-slate-700 transition"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">London</h2>
                  <p className="text-slate-400 text-sm mt-1">United Kingdom</p>
                </div>

                <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-bold">
                  ⭐ 82/100
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <div className="text-6xl font-black">24°</div>
                <img
                  src="https://cdn.weatherapi.com/weather/64x64/day/113.png"
                  alt="weather"
                  className="w-16 h-16"
                />
              </div>

              <p className="mt-3 text-slate-300">
                Sunny · Feels like 26°C
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6 border-t border-slate-800 pt-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Humidity
                  </p>
                  <p className="font-semibold mt-1">62%</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Wind
                  </p>
                  <p className="font-semibold mt-1">14 km/h</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    UV Index
                  </p>
                  <p className="font-semibold mt-1 text-amber-400">6 High</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Visibility
                  </p>
                  <p className="font-semibold mt-1">10 km</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">
                  3 Day Forecast
                </p>

                <div className="flex gap-3 overflow-x-auto">
                  {[1, 2, 3].map((day) => (
                    <div
                      key={day}
                      className="min-w-[90px] rounded-2xl border border-slate-800 bg-slate-950/50 p-3 text-center"
                    >
                      <p className="text-xs text-slate-400 font-semibold">Mon</p>

                      <img
                        src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
                        alt="forecast"
                        className="w-10 h-10 mx-auto my-2"
                      />

                      <p className="font-bold">28°</p>
                      <p className="text-xs text-slate-500">20°</p>
                      <p className="text-xs text-sky-400 mt-1">💧 40%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur">
          <h2 className="text-2xl font-bold mb-6">City Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 uppercase text-xs tracking-wide">
                  <th className="text-left py-3">Metric</th>
                  <th className="text-left py-3">London</th>
                  <th className="text-left py-3">Mumbai</th>
                  <th className="text-left py-3">Tokyo</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-slate-900">
                  <td className="py-4 text-slate-400">🌡️ Temperature</td>
                  <td className="py-4">24°C</td>
                  <td className="py-4 text-red-400 font-bold">36°C</td>
                  <td className="py-4">28°C</td>
                </tr>

                <tr className="border-b border-slate-900">
                  <td className="py-4 text-slate-400">🌧️ Rain Chance</td>
                  <td className="py-4 text-emerald-400 font-bold">20%</td>
                  <td className="py-4 text-red-400 font-bold">90%</td>
                  <td className="py-4">45%</td>
                </tr>

                <tr>
                  <td className="py-4 text-slate-400">⭐ Weather Score</td>
                  <td className="py-4 text-emerald-400 font-bold">82/100</td>
                  <td className="py-4 text-red-400">40/100</td>
                  <td className="py-4">68/100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-sky-500/5 p-6">
          <h2 className="text-2xl font-bold mb-6">
            📊 Overall Weather Intelligence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Best Weather Conditions
              </p>
              <h3 className="text-xl font-bold mt-2">London</h3>
              <p className="text-slate-400 text-sm mt-1">
                Score 82/100 — excellent outdoor conditions
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Highest Rain Risk
              </p>
              <h3 className="text-xl font-bold mt-2">Mumbai</h3>
              <p className="text-slate-400 text-sm mt-1">
                90% rain probability expected
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Clearest Visibility
              </p>
              <h3 className="text-xl font-bold mt-2">Tokyo</h3>
              <p className="text-slate-400 text-sm mt-1">
                12 km visibility for travel
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 text-slate-300 leading-7">
            <strong className="text-white">London</strong> currently offers the
            best overall weather conditions with pleasant temperatures, low rain
            probability, and good visibility. Mumbai is experiencing severe rain
            risk and high humidity levels.
          </div>
        </div>
      </div>
    </div>
  );
}
