import { useEffect, useState } from "react";

import { API_URL } from "../../../config/index";

import ListTitle from "../../molecules/titles/list-title";
import MeetupsFiltersCategories from "../meetups-filters-categories/meetups-filters-categories";
import MeetupsList from "../meetups-list/meetups-list";

const SectionMeetups = (props) => {
  const [meetupsList, setMeetupsList] = useState([]);

  const hasFilter = props.listOption.filter;
  const hasTitle = props.listOption.title;

  const fetchMeetupsList = async () => {
    try {
      let response = await fetch(API_URL + "/meetups").then((res) =>
        res.json()
      );

      if (response.success) {
        const fetchedList = response.data.meetups;
        setMeetupsList(fetchedList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMeetupsList();
  }, []);

  return (
    <section>
      {hasTitle && <ListTitle sectionTitle={props.sectionTitle} />}

      {hasFilter && <MeetupsFiltersCategories />}

      <MeetupsList meetupsList={meetupsList} />
    </section>
  );
};

export default SectionMeetups;
