import { FeaturesItem } from "@/app/types/dataType";

function FeaturesProduct({ features }: { features: FeaturesItem[] }) {
  return (
    <div className="mt-24 lg:mt-32">
      {features.map((item) => {
        return (
          <div className="container p-6 md:px-10 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 md:gap-20 lg:gap-32">
            <div className="lg:col-span-3 grid gap-8">
              <h3 className="text-3xl font-bold uppercase">Features</h3>
              <div className="text-secondary-color grid gap-6 font-medium">
                {item.feature
                  .split("\n\n")
                  .map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph.trim()}</p>
                  ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1 lg:col-span-2 lg:self-start">
              <h3 className="text-3xl font-bold uppercase">in the box</h3>
              <div>
                <ul className="grid gap-3">
                  {item.includes.map((incl, index) => {
                    return (
                      <li key={index} className="flex gap-6 font-medium">
                        <span className="text-[#D87D4A] ">{incl.quantity+"x"}</span>
                        <span className="text-secondary-color">
                          {incl.item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturesProduct;
