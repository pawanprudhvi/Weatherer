export default function AnalyticsDashboard({ weather }) {

    if (!weather) return null;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Metric
                title="Humidity"
                value={`${weather.current.humidity}%`}
            />

            <Metric
                title="Wind"
                value={`${weather.current.wind_kph} km/h`}
            />

            <Metric
                title="UV Index"
                value={weather.current.uv}
            />

            <Metric
                title="Visibility"
                value={`${weather.current.vis_km} km`}
            />

        </div>
    );
}

function Metric({ title, value }) {

    return (
        <div
            className="
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      rounded-[24px]
      p-5
      "
        >

            <p className="text-slate-400 text-sm">
                {title}
            </p>

            <h2 className="text-3xl font-black mt-2">
                {value}
            </h2>

        </div>
    );
}