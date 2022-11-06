import ItemImageWrap from "../item-contents-wrap/item-image-wrap";
import ItemBodyWrap from "../item-contents-wrap/item-body-wrap";
import styled from "@emotion/styled";

import { categoriesMap } from "../../../utils/category";
import { Meetup } from "../../../models/meetup";
import { Tag } from "../../../models/modules";

const MeetupItem = ({
  meetup,
  filterTagList,
}: {
  meetup: Meetup;
  filterTagList: Tag[];
}) => {
  const { title, host, tags, sessions, sortStrings } = meetup;

  if (tags.salonCategory === undefined) return;

  const salonCategory = tags.salonCategory[0];
  const selectedCategory = categoriesMap.get(salonCategory);
  const { name: categoryName, color, tag } = selectedCategory;

  const imageProps = { host, categoryName, color, sortStrings };
  const bodyProps = {
    title,
    tags,
    sessions,
    salonCategory,
    categoryName,
    tag,
    color,
  };

  return (
    <StList>
      <div className="wrap">
        <ItemImageWrap imageProps={imageProps} filterTagList={filterTagList} />
        <ItemBodyWrap bodyProps={bodyProps} />
      </div>
    </StList>
  );
};

export default MeetupItem;

const StList = styled.li`
  flex: 0 0 calc((100% - (1rem * 3)) / 4);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex: 0 0 calc((100% - (1rem * 2)) / 3);
  }
  @media (max-width: 500px) {
    flex: 0 0 calc((100% - (1rem * 1)) / 2);
  }
  @media (max-width: 320px) {
    flex: 0 0 100%;
  }

  .wrap {
    height: 100%;
    border-radius: 10px;

    display: flex;
    flex-flow: column;

    border: 1px solid #dadce0;
    background-color: #fff;

    box-sizing: border-box;
  }
`;
