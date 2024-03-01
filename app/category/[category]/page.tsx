import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import ProductItems from "../components/ProductItems";
import getData from "@/app/hooks/useFetch";
import Boshliqga from "@/app/components/Boshliqga";
import Nav from "@/app/components/Nav";
import ProductsBottom from "@/app/components/ProductsBottom";
import Footer from "@/app/components/Footer";

async function page({ params }: { params: { category: string } }) {

  const allProducts = await getData();
  const products = category(params.category);

  function category(category: string) {
    return allProducts
      .filter((item) => item.category === category)
      .map((item) => {
        return {
          id: item.id,
          slug:item.slug,
          new: item.new,
          name: item.name,
          category: item.category,
          imageData: item.image,
          description: item.description,
        };
      });
  }

  return (
    <div>
      <Boshliqga />
      <div className="contaienr p-6 md:px-10 md:py-16 mx-auto bg-black">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white uppercase ">
          {params.category}
        </h1>
      </div>
      <div className="container p-6 py-16 md:px-10 md:py-24 lg:py-40 mx-auto grid gap-32">
        {products.map((item, index) => {
          return (
            <ProductItems
              key={index}
              itemData={item}
              even={(index + 1) % 2 === 0}
            />
          );
        })}
      </div>
      <Nav type={"cate"} />
      <ProductsBottom />
      <Footer />
    </div>
  );
}

export default page;
