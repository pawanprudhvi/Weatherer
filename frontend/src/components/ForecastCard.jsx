export default function ForecastCard({ day }) {

  const weekday = new Date(day.date).toLocaleDateString(
    'en-US',
    { weekday: 'short' }
  );

  return (
    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-[22px]
      p-4
      flex
      flex-col
      items-center
      justify-between
      h-[190px]
      min-w-[95px]
      backdrop-blur-xl
      transition-all
      duration-300
      hover:bg-white/10
      hover:scale-[1.03]
      "
    >

      {/* Day */}
      <p className="text-slate-400 text-sm font-medium">
        {weekday}
      </p>

      {/* Icon */}
      <img
        src={day.day.condition.icon}
        alt="forecast"
        className="w-14 h-14 object-contain"
      />

      {/* Temp */}
      <h3 className="text-3xl font-black leading-none">
        {Math.round(day.day.avgtemp_c)}°
      </h3>

      {/* Condition */}
      <p
        className="
        text-[11px]
        text-slate-400
        text-center
        leading-tight
        line-clamp-2
        min-h-[28px]
        "
      >
        {day.day.condition.text}
      </p>
    </div>
  );
}