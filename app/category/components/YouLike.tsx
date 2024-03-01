import Button from "@/app/components/Button";
import ResImage from "./ResImage";
import { MaybeYouLike } from "@/app/types/dataType";

function YouLike({ mayBeYouLike }: { mayBeYouLike: MaybeYouLike[] }) {
  console.log(mayBeYouLike);

  return (
    <div className="my-20 lg:my-36">
      <div className="container mx-auto p-6 md:px-10">
        <h3 className="text-2xl font-bold text-center uppercase md:text-[32px]">
          you may also like
        </h3>
        <div className="gap-12 md:gap-4 lg:gap-8 mt-14 lg:mt-20 also-like-container">
          {mayBeYouLike[0].others.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <ResImage
                    alt={""}
                    mobile={item.image.mobile}
                    tablet={item.image.tablet}
                    desktop={item.image.desktop}
                  ></ResImage>
                </div>
                <div className="flex flex-col items-center gap-6 pt-6">
                  <div className="text-2xl font-bold uppercase">
                    {`XX 99 Mark I`}
                  </div>
                  <Button
                    color="orange"
                    href={`${item.slug}`}
                    title="see product"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YouLike;
