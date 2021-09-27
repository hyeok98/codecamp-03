import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/landing1.jpeg");
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainDiv = styled.div`
  width: 1500px;
  height: 1000px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Poto1 = styled.div`
  width: 800px;
  height: 600px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Landing2 = styled.img`
  width: 200px;
`;

export const Landing3 = styled.img`
  width: 800px;
`;

export const Poto2 = styled.div``;

export const ButtonDiv = styled.div`
  width: 600px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: pink; */
`;

export const Button = styled.div`
  width: 300px;
  height: 100px;
  font-size: 30px;
  color: white;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
  /* background-color: pink; */
`;
