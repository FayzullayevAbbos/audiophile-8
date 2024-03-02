import Product from "../types/dataType";

async function getData(): Promise<Product[]> {
  const res = await fetch(process.env.BASE_URL + "/api");
  return await res.json();
}
export default getData;
