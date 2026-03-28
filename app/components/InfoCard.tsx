export interface InfoCardData {
  title: string;
  description: string;
  iconSrc: string;
  iconSize?: number;
  minHeight?: string;
}

export default function InfoCard({
  title,
  description,
  iconSrc,
  iconSize = 32,
  minHeight = "min-h-0",
}: InfoCardData) {
  return (
    <div
      className={`
    rounded-xl
    border
    border-[#990422]
    p-6
    shadow-[6px_5px_23.5px_0px_#99042240,-4px_-4px_10.4px_0px_#99042240]
    dark:border-red-900/40
    ${minHeight}
  `}
    >
      {/* Icon */}
      <div
        className="
          mb-4
          inline-flex
          items-center
          justify-center
          rounded-lg
          bg-[#99042233]
          px-3
          py-3
          dark:bg-white
        "
      >
        <img
          src={iconSrc}
          alt={title}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      </div>

      <h3 className="mb-2 text-lg text-[#990422] sm:text-xl md:text-2xl font-bold text-[#990422]dark:text-red-400">
        {title}
      </h3>

      <p className=" text-justify text-lg text-[#6A6868] dark:text-white">
        {description}
      </p>
    </div>
  );
}
