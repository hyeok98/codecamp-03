import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper2 = styled.div`
  width: 1200px;
  /* border: solid 1px black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BestProduct = styled.span`
  font-size: 36px;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const BestDiv = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Best = styled.div`
  width: 282px;
  height: 339px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestImg = styled.div`
  width: 242px;
  height: 242px;
  border: solid 1px red;
  margin-bottom: 5px;
`;

export const BestFont = styled.div`
  width: 242px;
`;

export const BestTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const BestBottom = styled.div`
  width: 242px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BestBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BestMiniTitle = styled.span`
  font-size: 12px;
  color: #4f4f4f;
  margin-top: 3px;
  margin-bottom: 5px;
`;

export const BestPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const BestBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BestLike = styled.img`
  width: 20px;
`;

export const BestLikeSu = styled.span`
  font-size: 16px;
`;

export const SearchDiv = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const SearchLeft = styled.div``;

export const Sale = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

export const SoldOut = styled.span`
  font-size: 18px;
  color: #4f4f4f;
`;

export const SearchRight = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 282px;
  height: 52px;
  background-color: #f2f2f2;
  font-size: 16px;
  border: none;
`;

export const SearchDate = styled.div`
  width: 282px;
  height: 52px;
  font-size: 16px;
  border: solid 1px #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  border-radius: 10px;
`;

export const SearchButton = styled.button`
  width: 78px;
  height: 52px;
  background-color: black;
  font-size: 16px;
  color: white;
  margin-left: 30px;
`;

export const Hr = styled.hr`
  width: 1200px;
  background-color: #bdbdbd;
  margin-bottom: 20px;
`;

export const ProductList = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #bdbdbd;
  margin-bottom: 30px;
`;

export const ListLeft = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const ListPhoto = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 30px;
`;

export const ListFont = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
`;

export const FontTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const ListMiniTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #4f4f4f;
  margin-bottom: 5px;
`;

export const ListTag = styled.span`
  font-size: 16px;
  color: #bdbdbd;
  margin-bottom: 30px;
`;

export const FontBottom = styled.div`
  display: flex;
`;

export const FontBottomLeft = styled.div``;

export const ListImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ListBottomFont = styled.span`
  font-size: 16px;
  margin-right: 20px;
`;

export const FontBottomRight = styled.div``;

export const ListRight = styled.div`
  display: flex;
  align-items: center;
`;

export const MoneyImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const Money = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  margin-left: 10px;
`;

export const ProductButton = styled.button`
  width: 124px;
  height: 52px;
  border: solid 1px black;
  background-color: white;
  font-size: 16px;
  margin-left: 1100px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Loader = styled.div`
  overflow: auto;
`;
