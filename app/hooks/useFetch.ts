import Product from "../types/dataType";

async function getData(): Promise<Product[]> {
  const res = await fetch('https://audiophile-8.vercel.app/api');
  return await res.json();
}
export default getData;
