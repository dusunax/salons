import ItemImageWrap from "../item-contents-wrap/item-image-wrap";
import ItemBodyWrap from "../item-contents-wrap/item-body-wrap";

const MeetupItem = (props) => {
  return (
    <li>
      <ItemImageWrap />
      <ItemBodyWrap />
    </li>
  );
};

export default MeetupItem;
