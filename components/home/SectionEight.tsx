import { ADD_TO_CART, CREATE_CART } from "@/graphql/mutation";
import { shopifyFetch } from "@/lib/shopify";
import { useCartStore } from "@/store/cart";
import {
  ShopifyAddToCartResponse,
  ShopifyCreateCartResponse,
  ShopifyProduct,
} from "@/types/shopify";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  products: ShopifyProduct[];
};

const Card = (product: ShopifyProduct) => {
  const { setCart, openCart } = useCartStore();

  const [isLoading, setIsLoading] = useState(false);
  const [activeDesc, setActiveDesc] = useState(false);
  const [activeSize, setActiveSize] = useState(true);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    product.variants.edges[0].node.id,
  );

  const createCart = async () => {
    const res = await shopifyFetch<ShopifyCreateCartResponse>(CREATE_CART);
    return res.data.cartCreate.cart;
  };

  const addToCart = async (cartId: string, merchandiseId: string) => {
    const res = await shopifyFetch<ShopifyAddToCartResponse>(ADD_TO_CART, {
      cartId,
      lines: [
        {
          merchandiseId,
          quantity: 1,
        },
      ],
    });

    return res.data.cartLinesAdd.cart;
  };

  const handleAddToCart = async () => {
    if (!selectedVariantId) return;

    try {
      setIsLoading(true);
      let cartId = localStorage.getItem("cartId");

      if (!cartId) {
        const newCart = await createCart();
        cartId = newCart.id;
        localStorage.setItem("cartId", cartId);
      }

      const cart = await addToCart(cartId, selectedVariantId);

      setCart(cart);
      openCart(); //
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group relative">
      {!product.availableForSale && (
        <span className="bg-soft-black absolute top-2 right-2 h-fit w-fit rounded-full px-2 py-1 font-medium text-white uppercase">
          Sold Out
        </span>
      )}
      <Image
        className="w-full rounded-2xl object-cover md:rounded-3xl"
        src={product.featuredImage?.url || "/placeholder-image-product.webp"}
        alt={product.featuredImage?.altText || "product-img"}
        width={500}
        height={500}
      />
      <div className="absolute -bottom-full left-0 w-full p-2 transition-[bottom] duration-500 group-hover:bottom-0">
        {product.availableForSale && (
          <button
            disabled={selectedVariantId === null}
            onClick={() => handleAddToCart()}
            className="w-full cursor-pointer rounded-2xl bg-[#1C120F] py-4 text-2xl text-white uppercase"
          >
            {isLoading ? "loading..." : "add to cart"}
          </button>
        )}
      </div>
    </div>
  );
};

const SectionEight: React.FC<Props> = ({ products }) => {
  return (
    <section
      id="shop"
      className="relative -mt-0.5 flex flex-col justify-center bg-[#1C120F] pb-20 md:min-h-screen md:pb-0"
    >
      <div className="relative px-5 py-14 md:px-8">
        <div className="grid grid-cols-4 gap-x-5 gap-y-14 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
          <div className="col-span-4 flex flex-col gap-6 text-white md:col-span-5 md:gap-10">
            <h1 className="font-display block text-5xl md:text-[6.042vw] md:leading-none">
              Favorite Products
            </h1>
            <p className="md:text-[1.5vw] md:leading-[130%]">
              Since the fifteenth century, when roasted beans were first poured
              in Yemen, it carried more than energy. it carried meaning. In Los
              Angeles, we carry this heritage forward.
            </p>
            <div className="flex items-center gap-6 font-semibold md:text-[1.7vw] md:leading-[130%]">
              <span>Drip Coffee</span>
              <span>Pods</span>
              <span>Cans</span>
            </div>
          </div>
          <div className="col-span-4 md:col-span-7">
            <Swiper
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                "1024": {
                  slidesPerView: 2.2,
                },
              }}
            >
              {products.map((elem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card {...elem} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
