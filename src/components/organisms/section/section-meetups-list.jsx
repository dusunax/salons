import ListTitle from "../../molecules/titles/list-title";
import MeetupsFiltersCategories from "../meetups-filters-categories/meetups-filters-categories";
import MeetupsList from "../meetups-list/meetups-list";

const SectionMeetups = (props) => {
  const hasFilter = props.listOption.filter;
  const hasTitle = props.listOption.title;
  const list = props.list;

  return (
    <section>
      {hasTitle && <ListTitle sectionTitle={props.sectionTitle} />}

      {hasFilter && <MeetupsFiltersCategories list={list} />}

      <MeetupsList />
    </section>
  );
};

export default SectionMeetups;
