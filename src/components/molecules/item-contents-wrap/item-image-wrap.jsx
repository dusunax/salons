import Tags from "../tags/tags";

const ItemImageWrap = (props) => {
  const imageUrl = "이미지 주소";
  const imageAlt = "모임명 - 위치";
  const hasBanner = true;
  const name = "name";
  const intro = "intro";

  return (
    <div>
      <Tags />

      <img src={imageUrl} alt={imageAlt} />

      {hasBanner && (
        <div>
          {name} | {intro}
        </div>
      )}
    </div>
  );
};

export default ItemImageWrap;
