import { useState } from 'react';

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;

    onSearch(city);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      relative
      flex
      items-center
      gap-4
      w-full
      "
    >

      {/* Search Container */}
      <div
        className="
        flex-1
        relative
        group
        "
      >

        {/* Glow Effect */}
        <div
          className="
          absolute
          inset-0
          rounded-[28px]
          bg-gradient-to-r
          from-orange-500/20
          to-indigo-500/20
          blur-xl
          opacity-0
          group-focus-within:opacity-100
          transition-all
          duration-500
          "
        />

        {/* Input Wrapper */}
        <div
          className="
          relative
          flex
          items-center
          bg-[#11182d]/90
          border
          border-white/10
          backdrop-blur-2xl
          rounded-[28px]
          px-6
          h-[72px]
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >

          {/* Search Icon */}
          <div className="mr-4 text-slate-500">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

          </div>

          {/* Input */}
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city weather..."
            className="
            w-full
            bg-transparent
            outline-none
            text-white
            placeholder:text-slate-500
            text-lg
            font-medium
            "
          />

        </div>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="
        relative
        overflow-hidden
        h-[72px]
        px-8
        rounded-[28px]
        bg-gradient-to-br
        from-orange-400
        via-orange-500
        to-orange-600
        text-white
        font-bold
        text-lg
        shadow-[0_15px_40px_rgba(255,140,0,0.35)]
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-[0_20px_60px_rgba(255,140,0,0.45)]
        active:scale-[0.98]
        "
      >

        {/* Glow */}
        <div
          className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-300
          "
        />

        <span className="relative z-10">
          Search
        </span>

      </button>

    </form>
  );
}