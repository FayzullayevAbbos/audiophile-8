import Button from "@/app/components/Button";
import { ProductCategoryItem } from "@/app/types/dataType";

import ResImage from "./ResImage";

type ItemProps = {
  itemData: ProductCategoryItem;
  even: boolean;
};
function ProductItems({ even, itemData }: {even:boolean , itemData:ProductCategoryItem}) {
  const { name, slug, description, imageData } = itemData;



  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32">
      <div className={`${even ? "lg:order-2" : ""}`}>
        <ResImage
          alt={''}
          mobile={imageData.mobile}
          tablet={imageData.tablet}
          desktop={imageData.desktop}
        />
      </div>
      <div>
        <div className="flex flex-col items-center lg:items-start lg:justify-center h-full gap-6 lg:gap-8 text-center lg:text-start mx-auto lg:mx-0">
          <p
            className={`text-overline-size text-accent-color uppercase ${
              itemData.new ? "" : "hidden"
            }`}
          >
            New product
          </p>
          <h3 className="text-5xl font-bold md:w-9/12 lg:w-1/2">{name}</h3>
          <p className="text-secondary-color md:w-9/12 lg:w-2/3">
            {description}
          </p>
          <Button
            title="see product"
            color="orange"
            href={`/category/${itemData.category}/${itemData.slug}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
