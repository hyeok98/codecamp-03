import { useForm } from "react-hook-form";
import MarketWriteUI from "./Market-write.presenter";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Market-write.validation";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./Market-write.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/dist/client/router";

export default function MarketWrite(props) {
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  // const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  async function onClickSubmit(data) {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.myName,
            remarks: data.myRemarks,
            contents: data.myContents,
            price: Number(data.myPrice),
            tags: data.myTags,
          },
        },
      });
      console.log(result);
      alert("등록성공");
      router.push(`/markets/detail/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <MarketWriteUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickSubmit={onClickSubmit}
      // isEdit={props.isEdit}
    />
  );
}
