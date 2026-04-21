import { CART_UPDATE, REMOVE_PRODUCT_FROM_CART } from "@/graphql/mutation";
import { formatPrice } from "@/lib/formatPrice";
import { shopifyFetch } from "@/lib/shopify";
import { useCartStore } from "@/store/cart";
import {
  ShopifyCartProductRemoveResponse,
  ShopifyCartUpdateResponse,
} from "@/types/shopify";
import Image from "next/image";
import { useRef, useState } from "react";

const CartDrawer = () => {
  const { isOpen, closeCart, items, checkoutUrl } = useCartStore();

  const [updatingIds, setUpdatingIds] = useState<Set<string>>(new Set());
  const removingIdsRef = useRef<Set<string>>(new Set());

  const updateQuantity = async (
    cartId: string,
    lineId: string,
    quantity: number,
  ) => {
    const res = await shopifyFetch<ShopifyCartUpdateResponse>(CART_UPDATE, {
      cartId,
      lines: [{ id: lineId, quantity }],
    });

    return res.data.cartLinesUpdate.cart;
  };

  const startUpdating = (id: string) => {
    setUpdatingIds((prev) => new Set(prev).add(id));
  };

  const stopUpdating = (id: string) => {
    setUpdatingIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const isUpdating = (id: string) => updatingIds.has(id);

  const handleUpdateQuantity = async (itemId: string, newQuantity: number) => {
    if (isUpdating(itemId)) return; // 🚫 prevent spam

    startUpdating(itemId);

    try {
      const cart = await updateQuantity(
        useCartStore.getState().cartId!,
        itemId,
        newQuantity,
      );

      useCartStore.getState().setCart(cart);
    } finally {
      stopUpdating(itemId);
    }
  };

  const removeItem = async (cartId: string, lineId: string) => {
    const res = await shopifyFetch<ShopifyCartProductRemoveResponse>(
      REMOVE_PRODUCT_FROM_CART,
      {
        cartId,
        lineIds: [lineId],
      },
    );

    return res.data.cartLinesRemove.cart;
  };

  const handleRemoveItem = async (itemId: string) => {
    if (removingIdsRef.current.has(itemId)) return;

    removingIdsRef.current.add(itemId);
    startUpdating(itemId);

    try {
      const cart = await removeItem(useCartStore.getState().cartId!, itemId);

      useCartStore.getState().setCart(cart);
    } finally {
      removingIdsRef.current.delete(itemId);
      stopUpdating(itemId); // optional
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`bg-soft-black fixed top-0 right-0 z-50 h-full w-87.5 text-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-5">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-3">
            <h2 className="text-lg uppercase">Cart</h2>
            <button className="cursor-pointer" onClick={closeCart}>
              ✕
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <p className="text-xs opacity-60">Your cart is empty</p>
            ) : (
              items.map((item) => {
                return (
                  <div key={item.id} className="mb-4 text-xs">
                    <div className="flex justify-between">
                      <div className="flex gap-4">
                        <Image
                          className="size-14"
                          src={item.image.url}
                          alt={item.image.altText || item.title}
                          height={1024}
                          width={1024}
                        />

                        <div>
                          <p>{item.title}</p>
                          <p className="opacity-60">Size: {item.size}</p>

                          {/* Quantity Controls */}
                          <div className="mt-1 flex items-center gap-2">
                            <button
                              className="cursor-pointer"
                              disabled={
                                isUpdating(item.id) || item.quantity <= 1
                              }
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity - 1)
                              }
                            >
                              −
                            </button>

                            <span>
                              {isUpdating(item.id) ? "..." : item.quantity}
                            </span>

                            <button
                              className="cursor-pointer"
                              disabled={isUpdating(item.id)}
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        {/* Remove */}
                        <button
                          className="cursor-pointer text-[8px] text-red-500 uppercase"
                          disabled={isUpdating(item.id)}
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          remove
                        </button>
                        <p>
                          {formatPrice(
                            item.price.amount,
                            item.price.currencyCode,
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          <div className="border-t pt-4">
            <button
              disabled={!checkoutUrl || items.length === 0}
              onClick={() => {
                if (checkoutUrl) {
                  window.location.href = checkoutUrl;
                }
              }}
              className="w-full cursor-pointer bg-white py-3 text-black uppercase disabled:cursor-default disabled:opacity-50"
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
