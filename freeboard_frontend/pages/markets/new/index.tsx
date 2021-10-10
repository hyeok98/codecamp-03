import MarketWrite from "../../../src/components/units/market/market-write/Market-write.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MarketNewPage = () => {
  return <MarketWrite isEdit={false} />;
};

export default withAuth(MarketNewPage);
