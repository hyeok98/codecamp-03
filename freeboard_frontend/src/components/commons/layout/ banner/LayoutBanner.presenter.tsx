import { Wrapper, Wrapper2, Photo } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function LayoutBannerUI() {
  return (
    <Wrapper>
      <div>
        <Wrapper2>{/* <h2>MAMMOTH COFFEE</h2> */}</Wrapper2>
        <Slider {...settings}>
          <div>
            <Photo src="/images/banner1.png" />
          </div>
          <div>
            <Photo src="/images/banner2.png" />
          </div>
          <div>
            <Photo src="/images/banner3.png" />
          </div>
          <div>
            <Photo src="/images/banner4.jpeg" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
