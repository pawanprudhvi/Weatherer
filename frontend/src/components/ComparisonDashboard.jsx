export default function ComparisonDashboard({ cities }) {

    if (!cities?.length) return null;

    return (
        <div
            className="
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      rounded-[28px]
      p-5
      "
        >

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-2xl font-black">
                    City Comparison
                </h2>
            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b border-white/10 text-slate-400 text-left">

                            <th className="pb-4">City</th>
                            <th className="pb-4">Temp</th>
                            <th className="pb-4">Condition</th>
                            <th className="pb-4">Humidity</th>
                            <th className="pb-4">Wind</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            cities
                                .filter(
                                    (city) =>
                                        city &&
                                        city.location &&
                                        city.current
                                )
                                .map((city) => (

                                    <tr
                                        key={city.location.name}
                                        className="border-b border-white/5"
                                    >

                                        <td className="py-5 font-semibold">
                                            {city.location.name}
                                        </td>

                                        <td className="py-5">
                                            {city.current.temp_c}°
                                        </td>

                                        <td className="py-5">
                                            {city.current.condition.text}
                                        </td>

                                        <td className="py-5">
                                            {city.current.humidity}%
                                        </td>

                                        <td className="py-5">
                                            {city.current.wind_kph} km/h
                                        </td>

                                    </tr>

                                ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}