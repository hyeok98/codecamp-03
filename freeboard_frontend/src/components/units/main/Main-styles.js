import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fbf7f2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Heard = styled.div`
  width: 2300px;
  height: 130px;
  /* border: solid 1px black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainTitle = styled.img`
  width: 300px;
  height: 80px;
`;

export const Main = styled.div`
  width: 100%;
  height: 1270px;
  display: flex;
  justify-content: center;
`;

export const MainDiv = styled.div`
  width: 2400px;
  height: 1270px;
  /* border: solid 1px blue; */
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const MainLeft = styled.div`
  width: 700px;
  height: 1000px;
  /* border: solid 1px blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
`;

export const LeftMainTileDiv = styled.div`
  width: 350px;
  height: 300px;
  /* border: solid 1px blue; */
  margin-top: 40px;
`;

export const LeftTitle = styled.span`
  font-size: 80px;
  font-weight: bold;
`;

export const LeftSmallTileDiv = styled.div`
  width: 400px;
  /* border: solid 1px red; */
  margin-top: 20px;
`;

export const LeftSmallTile = styled.span`
  font-size: 22px;
`;

export const ButtonDiv = styled.div`
  width: 600px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
`;

export const Button = styled.div`
  width: 300px;
  height: 100px;
  font-size: 30px;
  color: black;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const MainRight = styled.div`
  margin-right: 50px;
  margin-bottom: 150px;
`;

export const MainImg = styled.img`
  width: 1000px;
  height: 1000px;
`;
