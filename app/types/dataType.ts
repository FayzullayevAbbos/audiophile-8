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
  slug: string;
  new: boolean;
  name: string;
  category: string;
  imageData: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
};
export type SingleProduct = {
  id: number;
  category: string;
  name: string;
  isNew: boolean;
  description: string;
  price: number;
  imageData: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
type include = {
  quantity: number;
  item: string;
};
type galery = {
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
export type FeaturesItem = {
  id: number;
  feature: string;
  includes: include[];
  gallery: galery;
};
type Other = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
export type MaybeYouLike = {
  id: number;
  slug:string,
  category: string;
  others: Other[];
};
