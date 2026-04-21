import { ShopifyCart } from "@/types/shopify";
import { create } from "zustand";

type CartItem = {
  id: string;
  title: string;
  size: string;
  quantity: number;
  price: { amount: string; currencyCode: string };
  image: {
    altText: string;
    url: string;
  };
};

type CartStore = {
  cartId: string | null;
  checkoutUrl: string | null;
  items: CartItem[];
  isOpen: boolean;

  setCart: (cart: ShopifyCart) => void;
  openCart: () => void;
  closeCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartId: null,
  checkoutUrl: null,
  items: [],
  isOpen: false,

  setCart: (cart) =>
    set({
      cartId: cart.id,
      checkoutUrl: cart.checkoutUrl,
      items: cart.lines.edges.map((edge) => ({
        id: edge.node.id,
        title: edge.node.merchandise.product.title,
        size: edge.node.merchandise.title,
        quantity: edge.node.quantity,
        price: { ...edge.node.merchandise.price },
        image: { ...edge.node.merchandise.image },
      })),
    }),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));
