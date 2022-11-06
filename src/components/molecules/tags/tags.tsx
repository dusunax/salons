import LabelTag from "../../atoms/label/label-tag";

import { Tag } from "../../../models/modules";

const Tags = ({
  tagList,
  categoryColor,
}: {
  tagList: Tag[];
  categoryColor: string;
}) => {
  const tags = tagList;

  return (
    <>
      {tags.map((tag) => {
        return (
          <LabelTag key={tag.text} tag={tag} categoryColor={categoryColor} />
        );
      })}
    </>
  );
};

export default Tags;
