
import { ProductCategoryItem } from "../types/dataType";
import getData from "./useFetch";

export  function useCategory(category: string):Promise<any> {
  const products =  getData();
  console.log(products);
  
  return products
    .filter((item) => item.category === category)
    .map((item) => {
      return {
        id: item.id,
        new: item.new,
        name: item.name,
        category: item.category,
        previewImageData: item.image,
        description: item.description,
      };
    })
    .sort((obj1, obj2) => Number(obj2.new) - Number(obj1.new));
}
