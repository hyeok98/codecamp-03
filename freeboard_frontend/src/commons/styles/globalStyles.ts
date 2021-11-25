import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "SunFlowerM";
    src: url("/fonts/Sunflower-Medium.ttf");
  }

  @font-face {
    font-family: "SunFlowerB";
    src: url("/fonts/Sunflower-Bold.ttf");
  }

  @font-face {
    font-family: "Dongle";
    src: url("/fonts/Dongle-Light.ttf");
  }
`;
