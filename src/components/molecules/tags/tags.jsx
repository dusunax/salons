import LabelTag from "../../atoms/label/label-tag";

const Tags = ({ tagList, categoryColor }) => {
  const tags = tagList;
  return (
    <>
      {tags.map((tag) => {
        if (tag.text === "모집 마감") return;
        return (
          <LabelTag key={tag.text} tag={tag} categoryColor={categoryColor} />
        );
      })}
    </>
  );
};

export default Tags;
