import { Wrapper, Wrapper2 } from "./LayoutBanner.styles";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LayoutBannerUI() {
  return (
    <Wrapper>
      <div>
        <Wrapper2>
          <h2> Single Item</h2>
        </Wrapper2>
        <Slider {...settings}>
          <div>
            <img src="/images/photo2.png" />
          </div>
          <div>
            <img src="/images/photo2.png" />
          </div>
          <div>
            <img src="/images/photo2.png" />
          </div>
          <div>
            <img src="/images/photo2.png" />
          </div>
          <div>
            <img src="/images/photo2.png" />
          </div>
          <div>
            <img src="/images/photo2.png" />
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
