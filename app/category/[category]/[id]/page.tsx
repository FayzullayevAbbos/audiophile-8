import Boshliqga from "@/app/components/Boshliqga";
import Back from "../../components/Back";
import SingleProductTop from "../../components/SingleProductTop";
import getData from "@/app/hooks/useFetch";

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
          productImageData: item.image,
        };
      });
  }
  const product = getSinglePro();

  console.log(product, id);

  return (
    <div>
      <Boshliqga />
      <Back />
      <SingleProductTop product={product} />
    </div>
  );
}

export default page;
