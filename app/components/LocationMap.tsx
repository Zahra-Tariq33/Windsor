export default function LocationMap() {
  return (
    <div className="relative flex items-center justify-center rounded-lg">
      <img
        src="/map.png"
        alt="World Map showing Aptagon Technologies locations"
        className="w-full h-auto rounded"
      />

      {/* Location 3: Lahore, Pakistan */}
      <a
        href="https://www.google.com/maps/search/Windsor+Consultancy+Services"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute flex items-center gap-2 group cursor-pointer"
        style={{ top: "14%", left: "74%" }}
      >
        {/* Location Pin */}
        <div className="relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              fill="white"
            />
            <circle fill="white" />
          </svg>
          {/* Pulse effect */}
          <div className="absolute -bottom-1/4 left-[0.5px] -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-ping" />
        </div>

        {/* Location Label */}
        <div className="py-1.5 whitespace-wrap transition-all group-hover:scale-105">
          <p className="text-sm sm:font-medium text-white">Lahore, Pakistan</p>
        </div>
      </a>
    </div>
  );
}
