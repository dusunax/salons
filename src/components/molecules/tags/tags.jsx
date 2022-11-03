import LabelTag from "../../atoms/label/label-tag";

const Tags = (props) => {
  const tags = ["태그A", "태그B"];
  return (
    <>
      {tags.map((content) => (
        <LabelTag key={content} content={content} />
      ))}
    </>
  );
};

export default Tags;
