import Image from "next/image";

function ProductsBottom() {
  return (
    <div>
      <div className="container mx-auto p-6 md:px-10 lg:py-20 grid justify-items-center lg:justify-items-start gap-8 text-center lg:text-left grid-cols-1 lg:grid-cols-2">
        <div className="rounded-lg overflow-hidden lg:order-2 w-full">
          <Image
            src={"/assets/shared/mobile/image-best-gear.jpg"}
            alt="man"
            width={654}
            height={600}
            className="w-full md:hidden"
          ></Image>
          <Image
            src={"/assets/shared/tablet/image-best-gear.jpg"}
            alt="man"
            width={1378}
            height={600}
            className="w-full hidden md:block lg:hidden"
          ></Image>
          <Image
            src={"/assets/shared/mobile/image-best-gear.jpg"}
            alt="man"
            width={540}
            height={588}
            className="w-full hidden lg:block"
          ></Image>
        </div>
        <div className="w-9/12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-bold uppercase">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h3>
          <p className="mt-8 text-secondary-color">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductsBottom;
