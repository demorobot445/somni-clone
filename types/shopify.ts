export interface ShopifyImage {
  url: string;
  altText?: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  sku?: string;
  availableForSale: boolean;
  price: {
    amount: string;
    currencyCode: string;
  };
  compareAtPrice?: {
    amount: string;
    currencyCode: string;
  };
}

export interface ShopifyVideoSource {
  url: string;
}

export interface ShopifyMediaImage {
  id: string;
  mediaContentType: "IMAGE";
  image: ShopifyImage;
}

export interface ShopifyMediaVideo {
  id: string;
  mediaContentType: "VIDEO";
  sources: ShopifyVideoSource[];
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  descriptionHtml: string;
  availableForSale: boolean;

  seo: {
    title: string;
    description: string;
  };

  featuredImage?: ShopifyImage;

  media: {
    edges: {
      node: ShopifyMediaImage | ShopifyMediaVideo;
    }[];
  };

  variants: {
    edges: {
      node: ShopifyVariant;
    }[];
  };

  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };

  metafield: {
    id: string;
    value: string;
  };
}

export interface ShopifyProductsResponse {
  data: {
    products: {
      edges: {
        node: ShopifyProduct;
      }[];
    };
  };
}

export interface ShopifyProductResponse {
  data: {
    product: ShopifyProduct;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  description: string;
  products: {
    edges: {
      node: ShopifyProduct;
    }[];
  };
}

export interface ShopifyCollectionResponse {
  data: {
    collection: ShopifyCollection;
  };
}

export interface ShopifyProductsResponse {
  data: {
    products: {
      edges: {
        node: ShopifyProduct;
      }[];
    };
  };
}

export interface ShopifyProductByHandleResponse {
  data: {
    productByHandle: ShopifyProduct;
  };
}

export interface ShopifyCreateCartResponse {
  data: {
    cartCreate: {
      cart: { checkoutUrl: string; id: string };
    };
  };
}

export interface ShopifyCartLines {
  edges: {
    node: {
      id: string;
      quantity: number;
      merchandise: {
        id: string;
        title: string;
        product: {
          title: string;
        };
        image: {
          altText: string;
          url: string;
        };
        quantity: number;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    };
  }[];
}

export interface ShopifyCart {
  id: string;
  totalQuantity: number;
  checkoutUrl: string;
  lines: ShopifyCartLines;
}

export interface ShopifyAddToCartResponse {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
}

export interface ShopifyCartUpdateResponse {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
}

export interface ShopifyCartProductRemoveResponse {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
}
