import LabelTag from "../../atoms/label/label-tag";

const Tags = (props) => {
  const tags = ["태그A", "태그B"];
  return (
    <div>
      {tags.map((content) => (
        <LabelTag content={content} />
      ))}
    </div>
  );
};

export default Tags;
