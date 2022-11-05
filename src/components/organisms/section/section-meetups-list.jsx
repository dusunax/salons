import ListTitle from "../../molecules/titles/list-title";
import MeetupsFiltersCategories from "../meetups-filters-categories/meetups-filters-categories";
import MeetupsList from "../meetups-list/meetups-list";

const SectionMeetups = ({ listOption, meetupsList }) => {
  const hasFilter = listOption.filterSection;
  const hasTitle = listOption.title !== undefined;
  const sortOpt = listOption.filterKeyword;

  return (
    <section>
      {hasTitle && <ListTitle sectionTitle={listOption} />}

      {hasFilter && <MeetupsFiltersCategories />}

      <MeetupsList meetupsList={meetupsList} sortOpt={sortOpt} />
    </section>
  );
};

export default SectionMeetups;
