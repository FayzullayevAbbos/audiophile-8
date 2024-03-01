"use client";
import { useDispatch, useSelector } from "react-redux";
import Hero from "./Hero";
import Nav from "./Nav";
import ProductsBottom from "./ProductsBottom";
import ProductsHome from "./ProductsHome";


function HomeMain() {

  return (
    <main>
      <Hero />
      <Nav type={"navba"} />
      <ProductsHome />
      <ProductsBottom />
    </main>
  );
}

export default HomeMain;
