import Boshliqga from "@/app/components/Boshliqga";
import Back from "../../components/Back";
import SingleProductTop from "../../components/SingleProductTop";
import getData from "@/app/hooks/useFetch";
import FeaturesProduct from "../../components/FeaturesProduct";
import GalleryImages from "../../components/GalleryImages";
import YouLike from "../../components/YouLike";
import Nav from "@/app/components/Nav";
import ProductsBottom from "@/app/components/ProductsBottom";
import Footer from "@/app/components/Footer";

async function page({ params }: { params: { slug: string } }) {
  const allProducts = await getData();
  const { slug } = params;

  function getSinglePro() {
    return allProducts
      .filter((item) => item.slug == slug)
      .map((item) => {
        return {
          id: item.id,
          slug:item.slug,
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
      .filter((item) => item.slug == slug)
      .map((item) => {
        return {
          id: item.id,
          
          feature: item.features,
          includes: item.includes,
          gallery: item.gallery,
        };
      });
  }
  function youLike() {
    return allProducts
      .filter((item) => item.slug == slug)
      .map((item) => {
        return {
          id: item.id,
          slug: slug,
          category: item.category,
          others: item.others,
        };
      });
  }
  const mayBeYouLike = youLike();
  const features = singleFeatures();
  const product = getSinglePro();

  return (
    <div>
      <Boshliqga />
      <Back />
      <SingleProductTop product={product} />
      <FeaturesProduct features={features} />
      <GalleryImages features={features} />
      <YouLike mayBeYouLike={mayBeYouLike} />
      <Nav type={""} />
      <ProductsBottom />
      <Footer />
    </div>
  );
}

export default page;
