import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProducReadUI from "./readProduct.presenter";
import { FETCH_PRODUCT } from "./readProduct.queries";

export default function ProductRead() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.id }, //id는 폴더이름
  });

  function onClickEdit() {
    router.push(`/08-3Quiz/detail-product/${router.query.id}/edit`);
  }

  return <ProducReadUI data={data} router={router} onClickEdit={onClickEdit} />;
}
