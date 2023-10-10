import { api } from "@/common/api";
import { productDetail } from "@/common/model/products";

export default async function Page() {
    const data = await getData("north-unisex-garantili");
    return <></>
  }


  async function getData(slug: any) {

    const res = await api.get<{ data: productDetail }>("/mehsul-etrafli/" + slug)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    console.log(res?.data);
  
  
    return res
  }