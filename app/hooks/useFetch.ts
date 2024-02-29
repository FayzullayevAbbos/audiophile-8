import Product from "../types/dataType"

async function  getData():Promise<Product[]> {
    const res = await fetch("http://localhost:3000/api")
    return await res.json()
}
export default getData
