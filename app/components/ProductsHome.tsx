import Image from "next/image";
import speaker from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import speakerM from "../assets/shared/tablet/image-zx9-speaker.jpg";

import Button from "./Button";
function ProductsHome() {
  return (
    <div className="py-10">
      <div className="container grid gap-8 mx-auto p-6 md:p-10">
        <div className="py-6 md:py-10 lg:py-0 grid gap-6 md:gap-20 grid-cols-1 lg:grid-cols-2 justify-items-center  bg-[#D87D4A] rounded-lg overflow-hidden product-orange-type">
          <div className="w-3/4 md:w-2/3 lg:w-full pt-8 lg:pt-0 relative flex justify-center items-center lg:items-end ">
            <Image
              src={speakerM}
              alt="speaker"
              width={320}
              height={388}
              className="w-40 md:w-44 h-auto lg:hidden"
            ></Image>
            <Image
              src={
                "/assets/shared/desktop/image-category-thumbnail-speakers.png"
              }
              alt="speaker"
              width={320}
              height={388}
              className="w-9/12 min-w-[360px] h-auto relative z-10 -bottom-[100px] hidden lg:block"
            ></Image>
            <div className="product-img-decoration "></div>
          </div>
          <div className="px-6 pb-12 lg:py-24 relative z-10 grid gap-6 justify-items-center lg:justify-items-start text-white text-center lg:text-left">
            <h3 className=" text-4xl md:text-6xl uppercase font-bold w-1/2">
              ZX9 speaker
            </h3>
            <p className="md:w-1/2">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              href="/category/speakers/6"
              title="see product"
              color="black"
            ></Button>
          </div>
        </div>
      </div>
      <div className="container  mx-auto p-6 md:p-10 relative">
        <div className="">
          <Image
            src={"/assets/home/mobile/image-speaker-zx7.jpg"}
            width={654}
            height={640}
            alt="speaker"
            className="w-full md:hidden"
          ></Image>
          <Image
            src={"/assets/home/tablet/image-speaker-zx7.jpg"}
            width={689}
            height={320}
            alt="speaker"
            className="w-full hidden md:block lg:hidden"
          ></Image>
          <Image
            src={"/assets/home/desktop/image-speaker-zx7.jpg"}
            width={1110}
            height={320}
            alt="speaker"
            className="w-full hidden lg:block"
          ></Image>
        </div>
        <div className="product-info flex  flex-col gap-6 justify-center items-start p-6 md:p-16 lg:p-24">
          <h3 className="text-3xl uppercase font-bold">ZX7 speaker</h3>
          <Button
            href="/category/speakers/5"
            title="see product"
            color="stroke"
          />
        </div>
      </div>
      <div className="product-type-3 gap-6 container mx-auto p-6 md:p-10 ">
        <div className=" rounded-md overflow-hidden">
          <Image
            src={"/assets/home/mobile/image-earphones-yx1.jpg"}
            alt="earphone"
            width={654}
            height={400}
            className="w-full md:hidden"
          ></Image>
          <Image
            src={"/assets/home/tablet/image-earphones-yx1.jpg"}
            alt="earphone"
            width={678}
            height={640}
            className="w-full hidden md:block lg:hidden"
          ></Image>
          <Image
            src={"/assets/home/desktop/image-earphones-yx1.jpg"}
            width={540}
            height={320}
            alt="speaker"
            className="w-full hidden lg:block"
          ></Image>
        </div>
        <div className="product-divide-info bg-content-color p-8 lg:pl-20 pt-10 flex flex-col justify-center gap-8 lg:gap-10 items-start rounded-md">
          <h3 className="text-3xl uppercase font-bold">YX1 earphones</h3>
          <Button
            href="/category/earphones/1"
            title="see product"
            color="stroke"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsHome;
