import Image from "next/image";
import imageHero from "../assets/home/desktop/image-hero.jpg";
import imageHero2 from "../assets/home/tablet/image-header.jpg";
import imageHero3 from "../assets/home/mobile/image-header.jpg";
import Button from "./Button";
function Hero() {
  return (
    <div className="bg-[#181818]">
      <div className="container mx-auto banner-container">
        <div className="banner-img">
          <Image
            src={imageHero3}
            alt="header"
            width={750}
            height={1200}
            className="w-full md:hidden"
          ></Image>
          <Image
            src={imageHero2}
            alt="header"
            width={1536}
            height={1458}
            className="w-full hidden md:block lg:hidden"
          ></Image>
          <Image
            src={imageHero}
            alt="header"
            width={2880}
            height={1458}
            className="w-full hidden  lg:block"
          ></Image>
        </div>
        <div className="banner-info pt-16">
          <div className="h-full text-secondary-color flex flex-col gap-6 justify-center items-center md:w-1/2  lg:w-8/12 lg:items-start px-6 text-center lg:text-left mx-auto lg:mx-3">
            <p className="text-sm home-title uppercase">new product</p>
            <h1 className="text-white xl:max-w-[500px] font-bold text-4xl md:text-6xl uppercase">
              XX99 Mark II HeadphoneS
            </h1>
            <p className="font-semibold text-white xl:max-w-[400px] lg:w-9/12">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button
              title="see product"
              href="/category/headphones/4"
              color="orange"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
