"use client"
import Product, { SingleProduct } from "@/app/types/dataType";
import ResImage from "./ResImage";

function SingleProductTop({product}:{product:SingleProduct[]}) {

  return <div className=""></div>
//    (
    // <div>
    //   <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-36">
    //     <div ref={productImageRef}>
    //       <ResImage
    //         alt={productImageData.alt}
    //         mobile={productImageData.mobile}
    //         tablet={productImageData.tablet}
    //         desktop={productImageData.desktop}
    //       />
    //       {/* <AddCartAnimation
    //         cartAnimationData={cartAnimationData}
    //         animateTrigger={animateTrigger}
    //       /> */}
    //     </div>
    //     <div className="grid gap-6 self-center md:items-center  lg:gap-8">
    //       <p
    //         className={`text-overline-size text-accent-color uppercase ${
    //           isNew ? "" : "hidden"
    //         }`}
    //       >
    //         new product
    //       </p>
    //       <h1 className="text-3xl lg:text-5xl font-bold lg:w-8/12">{name}</h1>
    //       <p className="text-secondary-color lg:w-10/12">{description}</p>
    //       <div className="text-xl font-bold">$ {price.toLocaleString()}</div>
    //       <div className="flex gap-4">
    //         <div className="flex w-5/12 bg-content-color font-bold">
    //           <div
    //             className="flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color"
    //             onClickCapture={minusquantity}
    //           >
    //             -
    //           </div>
    //           <div className="flex-1 flex justify-center items-center">
    //             {quantity}
    //           </div>
    //           <div
    //             className="flex-1 flex justify-center items-center text-secondary-color cursor-pointer hover:text-accent-color"
    //             onClickCapture={addquantity}
    //           >
    //             +
    //           </div>
    //         </div>
    //         <div
    //           className="block text-xs py-3 px-8 bg-button-orange-color text-white uppercase tracking-wider cursor-pointer hover:bg-button-orange-hover-color"
    //           onClickCapture={addtoCart}
    //         >
    //           Add to cart
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
}

export default SingleProductTop;
