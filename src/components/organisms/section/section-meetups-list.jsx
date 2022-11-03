import ListTitle from "../../molecules/titles/list-title";
import MeetupsFiltersCategories from "../meetups-filters-categories/meetups-filters-categories";
import MeetupsList from "../meetups-list/meetups-list";

const SectionMeetups = (props) => {
  const hasFilter = props.listOption.filter;
  const hasTitle = props.listOption.title;

  return (
    <section>
      {hasTitle && <ListTitle />}

      {hasFilter && <MeetupsFiltersCategories />}

      <MeetupsList />
    </section>
  );
};

export default SectionMeetups;
