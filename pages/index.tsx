import HeroV2 from "@/components/home/HeroV2";
import SectionEight from "@/components/home/SectionEight";
import SectionFour from "@/components/home/SectionFour";
import SectionNine from "@/components/home/SectionNine";
import SectionSix from "@/components/home/SectionSix";
import SectionThree from "@/components/home/SectionThree";
import { GET_PRODUCTS } from "@/graphql/query";
import { shopifyFetch } from "@/lib/shopify";
import { ShopifyProduct, ShopifyProductsResponse } from "@/types/shopify";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = (async () => {
  const res = await shopifyFetch<ShopifyProductsResponse>(GET_PRODUCTS);

  const products = res.data.products.edges.map((e) => e.node);

  return { props: { products }, revalidate: 60 };
}) satisfies GetStaticProps<{
  products: ShopifyProduct[];
}>;

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Hala Coffee</title>
      </Head>
      <HeroV2 />
      <div className="mixer relative z-20 -my-[15vh] h-[30vh] w-full bg-linear-0 from-transparent via-[#1C120F] to-transparent" />
      <SectionNine />
      <SectionEight products={products} />
      <SectionThree />
      <SectionFour />
      <SectionSix />
    </>
  );
}
