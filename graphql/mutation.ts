export const CREATE_CART = `
    mutation CartCreate {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
      }
    }
`;

const Cart = `
    cart {
          id
          checkoutUrl
          totalQuantity
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    price {
                      amount
                      currencyCode
                    }
                    product {
                      title
                    }
                    image {
                      altText
                      url
                    }
                  }
                }
              }
            }
          }
        }
`;

export const ADD_TO_CART = `
    mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
       ${Cart}
      }
    }
`;

export const CART_UPDATE = `
   mutation updateCartLines($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      ${Cart}
    }
}
`;

export const REMOVE_PRODUCT_FROM_CART = `
    mutation removeCartLines($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        ${Cart}
      }
    }
`;
