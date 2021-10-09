import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper2 = styled.div`
  width: 1200px;
  /* border: solid 1px black; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 10px;
  width: 1200px;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const HeaderImg = styled.img`
  width: 50px;
`;

export const SellerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Seller = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const Date = styled.span`
  font-size: 13px;
  color: #828282;
`;

export const HeaderRight = styled.div``;

export const Hr = styled.hr`
  width: 1200px;
  height: 1px;
  background-color: #bdbdbd;
  margin-bottom: 20px;
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-bottom: 100px;
`;

export const TitleLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiniTitle = styled.span`
  font-size: 18px;
  color: #bdbdbd;
  margin-bottom: 10px;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

export const LikeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`;

export const Like = styled.img`
  width: 30px;
  margin-bottom: 5px;
`;

export const LikeSu = styled.span`
  font-size: 18px;
`;

export const Photo = styled.div`
  width: 700px;
  height: 600px;
  border: solid 1px black;
  margin-bottom: 80px;
`;

export const Contents = styled.div`
  width: 1200px;
  font-size: 20px;
  margin-bottom: 50px;
`;

export const HashtagDiv = styled.div`
  width: 1200px;
  margin-bottom: 40px;
`;

export const Hashtag = styled.span`
  font-size: 16px;
  color: #bdbdbd;
  margin-right: 10px;
`;

export const Hr2 = styled.hr`
  width: 1200px;
  height: 1px;
  background-color: #bdbdbd;
  margin-bottom: 100px;
`;

export const Map = styled.div`
  width: 1200px;
  height: 360px;
  border: solid 1px black;
  margin-bottom: 80px;
`;

export const ButtonDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const Button01 = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: #bdbdbd;
  font-size: 18px;
  margin-bottom: 80px;
  color: #4f4f4f;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Button02 = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  background-color: #ffd600;
  font-size: 18px;
  margin-bottom: 80px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;
