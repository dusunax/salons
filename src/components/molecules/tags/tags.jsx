import LabelTag from "../../atoms/label/label-tag";

const Tags = ({ tagList, categoryColor }) => {
  const tags = tagList;
  return (
    <>
      {tags.map((tag) => (
        <LabelTag key={tag.text} tag={tag} categoryColor={categoryColor} />
      ))}
    </>
  );
};

export default Tags;
