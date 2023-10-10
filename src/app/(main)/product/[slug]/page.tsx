import { api } from "@/common/api";
import { productDetail } from "@/common/model/products";
import ProductDetail from "./products";

export default async function Slug(params: { params: { slug: string } }) {
  const { slug } = params.params


  const data = await getData(slug);
  if (!data?.data) {
    return
  }
  return <ProductDetail data={data?.data} slug={slug} />
}


async function getData(slug: any) {

  const res = await api.get<{ data: productDetail }>("/mehsul-etrafli/" + slug)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log(res?.data);


  return res
}