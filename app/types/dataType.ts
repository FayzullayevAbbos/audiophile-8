export default interface Product {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

export type ResImageProps = {
  alt: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
export type ProductCategoryItem = {
  id: number;
  new: boolean;
  name: string;
  category: string;
  previewImageData: ResImageProps;
  description: string;
};
export type SingleProduct = {
  id: number;
  category: string;
  name: string;
  isNew: boolean;
  description: string;
  price: number;
  productImageData: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
