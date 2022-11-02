import ListTitle from "../../molecules/titles/list-title";
import MeetupsFiltersCategories from "../../organisms/meetups-filters-categories/-filters-categories";
import MeetupsList from "../../organisms/meetups-list/meetups-list";

const SectionMeetupsList = (props) => {
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

export default SectionMeetupsList;
