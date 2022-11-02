const Banner = (props) => {
  const imageUrl = "배너 이미지 주소";
  const imageAlt = "배너 설명";
  const height = 100;

  return (
    <div>
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default Banner;
