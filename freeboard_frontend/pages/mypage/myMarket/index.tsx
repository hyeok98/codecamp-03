import MyMarket from "../../../src/components/units/mypages/mymarkets/Mymarkets.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MyMarketPage = () => {
  return <MyMarket />;
};

export default withAuth(MyMarketPage);
