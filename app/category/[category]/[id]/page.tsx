import Boshliqga from "@/app/components/Boshliqga";
import Back from "../../components/Back";
import SingleProductTop from "../../components/SingleProductTop";
import getData from "@/app/hooks/useFetch";
import FeaturesProduct from "../../components/FeaturesProduct";
import GalleryImages from "../../components/GalleryImages";

async function page({ params }: { params: { id: number } }) {
  const allProducts = await getData();
  const { id } = params;

  function getSinglePro() {
    return allProducts
      .filter((item) => item.id == id)
      .map((item) => {
        return {
          id: item.id,
          category: item.category,
          name: item.name,
          isNew: item.new,
          description: item.description,
          price: item.price,
          imageData: item.image,
        };
      });
  }

  function singleFeatures() {
    return allProducts
      .filter((item) => item.id == id)
      .map((item) => {
        return {
          id: item.id,
          feature: item.features,
          includes: item.includes,
          gallery: item.gallery,
        };
      });
  }
  const features = singleFeatures()
  const product = getSinglePro();

  console.log(product, id);

  return (
    <div>
      <Boshliqga />
      <Back />
      <SingleProductTop product={product} />
      <FeaturesProduct features={features} />
      <GalleryImages features={features} />
    </div>
  );
}

export default page;
