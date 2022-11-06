import { memo, useEffect, useLayoutEffect } from "react";

import styled from "@emotion/styled";

import MeetupItem from "../../molecules/item/meetup-item";

const MeetupsList = ({
  meetupsList,
  sortOpt,
  filterProps,
  hasFilter,
  hasPagenation,
}) => {
  const { categories, filterSelected, listRef, itemEndRef } = filterProps;

  const isSortedItem = (sortOpt, meetup) => {
    if (sortOpt) {
      const sort = meetup.sortStrings;
      switch (sortOpt) {
        case "closedMeetup":
          if (sort.includes("모집 마감")) return true;
          break;
        case "openMeetup":
          if (!sort.includes("모집 마감")) return true;
          break;
        default:
          return false;
      }
    }
  };

  const isFilterClosed = (filterSelected, meetup) => {
    if (filterSelected.closed === false) return false;
    const closed = meetup.sortStrings.includes("모집 마감");
    if (closed) return true;
  };

  const isFilteredItem = (filterSelected, meetup) => {
    if ((filterSelected.day === null) & (filterSelected.location === null)) {
      return false;
    }
    const currentMeetup = {
      day: meetup.tags.dayOfWeek[0],
      location: meetup.tags.region[0],
    };

    const isMatch = {
      day: true,
      location: true,
    };

    for (const x in currentMeetup) {
      if (filterSelected[x] !== null && filterSelected[x] !== "none") {
        if (currentMeetup[x] !== filterSelected[x]) {
          isMatch[x] = false;
        } else {
          isMatch[x] = true;
        }
      } else {
        isMatch[x] = true;
      }
    }

    if (isMatch.day & isMatch.location) {
      return false;
    } else {
      return true;
    }
  };

  const isFilteredCategory = (categories, meetup) => {
    const currentCate = meetup.tags.salonCategory[0];
    const isAll = categories[0].active;
    if (isAll) return false;

    for (const x in categories) {
      const selectedCate = categories[x].salonCategory;
      const isCateUnactive = !categories[x].active;

      if (currentCate === selectedCate && isCateUnactive) {
        return true;
      }
    }
    return false;
  };

  return (
    <StUList ref={hasPagenation ? listRef : null}>
      {meetupsList?.map((meetup) => {
        if (isSortedItem(sortOpt, meetup)) return;

        if (hasFilter) {
          if (isFilteredItem(filterSelected, meetup)) return;
          if (isFilterClosed(filterSelected, meetup)) return;
          if (isFilteredCategory(categories, meetup)) return;
        }
        const filterTagList = meetup.filter;

        return (
          <MeetupItem
            key={meetup.id + meetup.title}
            meetup={meetup}
            filterTagList={filterTagList}
          />
        );
      })}
    </StUList>
  );
};

export default MeetupsList;

const StUList = styled.ul`
  min-height: 10rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex-flow: wrap;
  gap: 1rem;

  position: relative;

  ::after {
    content: "선택한 모임이 없습니다.";
    padding: 1rem 0.2rem;

    position: absolute;
    z-index: -9;

    color: #aaa;

    font-size: 11px;
  }
`;
