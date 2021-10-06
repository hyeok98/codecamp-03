import { withAuth } from "../../src/components/commons/hocs/withAuth";

const HocPage = () => {
  return (
    <>
      <div>HOC연습 페이지 입니다.</div>
    </>
  );
};

export default withAuth(HocPage);
