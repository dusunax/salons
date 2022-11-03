import ItemImageWrap from "../item-contents-wrap/item-image-wrap";
import ItemBodyWrap from "../item-contents-wrap/item-body-wrap";
import styled from "@emotion/styled";

const MeetupItem = (props) => {
  return (
    <StList>
      <div className="wrap">
        <ItemImageWrap />
        <ItemBodyWrap />
      </div>
    </StList>
  );
};

export default MeetupItem;

const StList = styled.li`
  flex: 0 0 calc((100% - (1rem * 3)) / 4);
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;

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
    border: 1px solid #dadce0;

    box-sizing: border-box;
  }
`;
