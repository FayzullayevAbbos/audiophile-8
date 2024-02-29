import Link from "next/link";
import { navData } from "../navData/navData";
import Image from "next/image";
function Nav({ type }: { type: string }) {
  return (
    <nav className={`bg-[rgba(0,0,0,0.3)] flex-1  grid   container mx-auto`}>
      <div
        className={`p-6 pt-8 bg-white  md:overflow-y-auto nav-box ${
          type == "navbar" ? "max-h-[80vh] overflow-y-scroll" : ""
        }`}
      >
        {navData.map((data) => {
          return (
            <div
              key={data.title}
              className="nav-Box-item  relative xl:px-5    "
            >
              <div className="w-[180px] mx-auto pos grid  place-content-center  ">
                <Image
                  src={data.icon}
                  alt="d"
                  className=" w-[150px]  h-[120px]"
                />
              </div>
              <div className="navBox-item-content p-6 bg-content-color min-h-44 flex flex-col justify-end items-center gap-3 tracking-wider rounded-md">
                <div className="font-bold uppercase">{data.title}</div>
                <div className="uppercase text-secondary-color text-sm font-bold flex gap-2 items-center">
                  <Link className="hover:text-[#D87D4A]" href={data.href}>
                    shop
                  </Link>
                  <div className="border-t-2 border-r-2 border-input-focus-color border-[#D87D4A]   rotate-45 w-2 h-2">
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
