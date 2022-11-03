import styled from "@emotion/styled";
import Tags from "../tags/tags";

const ItemImageWrap = (props) => {
  const imageUrl = "이미지 주소";
  const imageAlt = "모임명 - 위치";
  const hasBanner = true;
  const name = "name";
  const intro = "intro";

  return (
    <StItemImageWrap>
      <div className="tag_container">
        <Tags />
      </div>

      <img src={imageUrl} alt={imageAlt} />

      {hasBanner && (
        <div className="banner_container">
          {name} | {intro}
        </div>
      )}
    </StItemImageWrap>
  );
};

export default ItemImageWrap;

const StItemImageWrap = styled.div`
  height: 160px;
  position: relative;
  display: block;

  img {
    height: 100%;

    object-fit: cover;
    display: block;
    background-color: pink;
  }

  .tag_container,
  .banner_container {
    width: 100%;

    position: absolute;
    display: flex;
    gap: 0.5rem;
  }

  .tag_container {
    padding: 0.5rem 0.8rem;
    top: 0;
  }
  .banner_container {
    padding: 0.2rem 0.8rem 0.3rem;
    bottom: 0;

    justify-content: center;
    background: skyblue;
  }
`;
