import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 1px solid yellow;
`;

export default function LibraryYouTube() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=EIm4HvDgQCM"
      width={800}
      height={600}
      muted={true}
      playing={true}
    />
  );
}
