const PRODUCT = `
        id
        title
        handle
        descriptionHtml
        availableForSale
        seo {
          title
          description
        }
        featuredImage {
          url
          altText
        }
       
        media(first: 10) {
          edges {
            node {
              id
              mediaContentType
              ... on MediaImage {
                image {
                  url
                  altText
                  }
                }
              ... on Video {
                id
                sources {
                  url
                }
              }
            }
          }
        }
        variants(first: 50) {
          edges {
            node {
              id
              title
              sku
              availableForSale
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        metafield(key: "short_description", namespace: "custom") {
          id
          value
        }    
`;

export const GET_PRODUCTS = `
query Products {
  products(first: 50) {
    edges {
      node {${PRODUCT}}
    }
  }
}
`;

export const COLLECTION_PRODUCTS_QUERY = `
query CollectionProducts($handle: String!) {
  collection(handle: $handle) {
    id
    title
    products(first: 50) {
      edges {
        node {
          ${PRODUCT}
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_BY_HANDLE = `
query SingleProduct($handle:String!) {
  product(handle: $handle) {
    ${PRODUCT}
  }
}
`;
