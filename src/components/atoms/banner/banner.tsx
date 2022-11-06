import styled from "@emotion/styled";

type BannerData = {
  imageUrl: string;
  imageAlt: string;
  height: number;
};

const Banner: React.FC<BannerData> = ({ ...bannerProps }) => {
  const { imageUrl, height } = bannerProps;

  return (
    <StBanner
      imageUrl={imageUrl}
      height={height}
      role="figure"
      aria-label="배너"
    />
  );
};

export default Banner;

const StBanner = styled.div<{ height: number; imageUrl: string }>`
  width: 100vw;
  height: ${(props) => props.height * 1.5 + "rem"};
  overflow: hidden;
  text-align: center;

  background: #000 url(${(props) => props.imageUrl}) center / cover;

  @media (max-width: 500px) {
    height: ${(props) => props.height + "rem"};
    background: #000 url(${(props) => props.imageUrl}) no-repeat bottom center /
      1500px;
  }
  @media (max-width: 320px) {
    height: ${(props) => props.height * 0.8 + "rem"};
    background: #000 url(${(props) => props.imageUrl}) no-repeat bottom center /
      1200px;
  }
`;
