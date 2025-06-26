"use client";
import Image from "next/image";
import ScrollToButtonProps from "../../types/ScrollToButton.type";

export default function ScrollToButton({
  scrollRef,
  imageSrc = "/icons/arrow-down.png",
  alt = "arrow"
}: ScrollToButtonProps) {
  const handleScroll = () => {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`absolute left-1/2 bottom-[30px] transform -translate-x-1/2 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={handleScroll}
        className="button-3d w-[50px] h-[50px] hover:h-[40px] rounded-full border-none font-semibold flex items-center justify-center cursor-pointer duration-300 overflow-hidden relative hover:w-[140px] hover:rounded-full hover:items-center hover:bg-white hover:text-black"
      >
        <Image
          className="arrow-tooltip duration-300"
          src={imageSrc}
          height={50}
          width={50}
          alt={alt}
        />
      </button>
    </div>
  );
}