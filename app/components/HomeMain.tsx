"use client";
import { useDispatch, useSelector } from "react-redux";
import Hero from "./Hero";
import Nav from "./Nav";
import ProductsBottom from "./ProductsBottom";
import ProductsHome from "./ProductsHome";
import { setApi } from "../redax/appSlice";

function HomeMain() {
  // const dispatch = useDispatch();
  // async function getData() {
  //   const res = await fetch("http://localhost:3000/api");
  //   return res.json();
  // }
  // dispatch(setApi(getData()));
  // const data = useSelector((state: any) => state.api);
  // console.log(data);

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
