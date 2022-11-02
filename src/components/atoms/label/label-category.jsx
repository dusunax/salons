const LabelCategory = (props) => {
  const imageUrl = "라벨 이미지";
  const imageAlt = "라벨";
  const name = "카테고리";

  return (
    <div>
      <img src={imageUrl} alt={imageAlt} />
      <span>{name}</span>
    </div>
  );
};

export default LabelCategory;
