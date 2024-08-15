import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center items-center min-h-screen top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  px-10 ">
        <div className="text-white p-2 flex flex-col gap-10 items-start sm:justify-center sm:items-center">
          <div className="flex flex-col sm:items-center">
            <div className=" text-[80px] font-extrabold leading-[80px] ">
              I&apos;m Mohd Uvaish
            </div>
            <div className="font-extralight ">Also Known as <span className="font-extrabold">ItsMe Prince</span></div>
          </div>
          <Link href="https://raw.githubusercontent.com/itsmeprinceyt/portfolio_itsmeprince/main/public/Mohd%20Uvaish%20-%20Resume%20pdf.pdf" target="_blank">
            <button className="bg-black px-6 py-3 rounded-full shadow-2xl border-2 shadow-white/30 hover:bg-white hover:text-black transition-all animate-pulse on-hover-pulse hover:shadow-white/80">Download CV</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
