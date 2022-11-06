import ListTitle from "../../molecules/titles/list-title";
import MeetupsFiltersCategories from "../meetups-filters-categories/meetups-filters-categories";
import MeetupsList from "../meetups-list/meetups-list";

const SectionMeetups = ({
  listOption,
  meetupsList,
  handlerProps,
  filterProps,
}) => {
  const hasPagenation = listOption.pagenation;
  const hasFilter = listOption.filterSection;
  const hasTitle = listOption.title !== undefined;
  const sortOpt = listOption.filterKeywords[0];

  return (
    <section>
      {hasTitle && <ListTitle sectionTitle={listOption} />}

      {hasFilter && (
        <MeetupsFiltersCategories
          handlerProps={handlerProps}
          filterProps={filterProps}
        />
      )}

      <MeetupsList
        meetupsList={meetupsList}
        sortOpt={sortOpt}
        filterProps={filterProps}
        hasFilter={hasFilter}
        hasPagenation={hasPagenation}
      />
    </section>
  );
};

export default SectionMeetups;
