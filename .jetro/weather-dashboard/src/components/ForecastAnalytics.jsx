export default function ForecastAnalytics({ data }) {

    if (!data?.forecast?.forecastday) {
        return null;
    }

    return (

        <div
            className="
      bg-[#0d1325]
      border
      border-white/10
      rounded-[32px]
      p-8
      min-h-[520px]
      flex
      flex-col
      "
        >

            {/* HEADER */}
            <div className="flex justify-between items-start mb-10">

                <div>

                    <h2
                        className="
            text-3xl
            font-black
            tracking-tight
            "
                    >
                        Temperature Trend
                    </h2>

                    <p
                        className="
            text-slate-400
            mt-2
            text-sm
            "
                    >
                        Daily forecast analytics and weather insights
                    </p>

                </div>

                <div
                    className="
          px-4
          py-2
          rounded-full
          bg-orange-500/10
          border
          border-orange-500/20
          text-orange-400
          text-sm
          font-semibold
          "
                >
                    Live Forecast
                </div>

            </div>


            {/* MAIN ANALYTICS */}
            <div
                className="
        flex-1
        flex
        items-end
        justify-between
        gap-5
        overflow-x-auto
        "
            >

                {data.forecast.forecastday.map((day) => {

                    const avgTemp =
                        Math.round(day.day.avgtemp_c);

                    const maxTemp =
                        Math.round(day.day.maxtemp_c);

                    const minTemp =
                        Math.round(day.day.mintemp_c);

                    const rain =
                        day.day.daily_chance_of_rain;

                    const humidity =
                        Math.round(day.day.avghumidity);

                    const wind =
                        Math.round(day.day.maxwind_kph);

                    const weekday =
                        new Date(day.date).toLocaleDateString(
                            'en-US',
                            { weekday: 'short' }
                        );

                    const barHeight =
                        Math.max(160, avgTemp * 7);

                    return (

                        <div
                            key={day.date}
                            className="
              flex
              flex-col
              items-center
              min-w-[220px]
              "
                        >

                            {/* TEMP VALUE */}
                            <div className="mb-5 text-center">

                                <h3
                                    className="
                  text-5xl
                  font-black
                  leading-none
                  tracking-tight
                  "
                                >
                                    {avgTemp}°
                                </h3>

                                <p
                                    className="
                  text-orange-300
                  text-sm
                  mt-2
                  font-medium
                  "
                                >
                                    H:{maxTemp}° / L:{minTemp}°
                                </p>

                            </div>


                            {/* ANALYTICS CARD */}
                            <div
                                className="
                relative
                w-full
                rounded-[32px]
                overflow-hidden
                border
                border-white/10
                bg-[#111827]
                backdrop-blur-xl
                flex
                flex-col
                justify-end
                "
                                style={{
                                    height: `${barHeight}px`
                                }}
                            >

                                {/* GLOW */}
                                <div
                                    className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-orange-600/90
                  via-orange-500/70
                  to-orange-300/30
                  "
                                />

                                {/* WEATHER ICON */}
                                <div
                                    className="
                  absolute
                  top-5
                  left-1/2
                  -translate-x-1/2
                  "
                                >

                                    <img
                                        src={day.day.condition.icon}
                                        alt="forecast"
                                        className="w-16 h-16"
                                    />

                                </div>


                                {/* CONDITION */}
                                <div
                                    className="
                  relative
                  z-10
                  p-5
                  "
                                >

                                    <p
                                        className="
                    text-center
                    text-white
                    font-semibold
                    text-base
                    "
                                    >
                                        {day.day.condition.text}
                                    </p>

                                </div>

                            </div>


                            {/* DAY */}
                            <div className="mt-5 text-center">

                                <h4
                                    className="
                  text-lg
                  font-bold
                  "
                                >
                                    {weekday}
                                </h4>

                                <p
                                    className="
                  text-xs
                  text-slate-500
                  mt-1
                  "
                                >
                                    {day.date}
                                </p>

                            </div>


                            {/* INSIGHT BOX */}
                            <div
                                className="
                mt-5
                w-full
                rounded-[24px]
                bg-white/5
                border
                border-white/10
                p-4
                space-y-3
                "
                            >

                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400 text-sm">
                                        Rain
                                    </span>

                                    <span className="text-white font-semibold text-sm">
                                        {rain}%
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400 text-sm">
                                        Humidity
                                    </span>

                                    <span className="text-white font-semibold text-sm">
                                        {humidity}%
                                    </span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400 text-sm">
                                        Wind
                                    </span>

                                    <span className="text-white font-semibold text-sm">
                                        {wind} km/h
                                    </span>
                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}