import * as moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

const formatYYYYMMDD = (date) => {
  if (date === null) return null;

  return +moment(date).format("YYYYMMDD");
};

const filteringMeetup = (meetup) => {
  let result = [];
  const { openingDate, maxCapacity, attendeeCount, closingDate } = meetup;

  const fristSessionDate = meetup.sessions[0].date;
  const attendeeLeft = maxCapacity - attendeeCount;
  const attendeeFull = attendeeLeft === 0;

  const dates = {
    opening: formatYYYYMMDD(openingDate),
    closing: formatYYYYMMDD(closingDate),
    today: formatYYYYMMDD(moment()),
    firstSession: formatYYYYMMDD(fristSessionDate),
  };

  const dateLeft = dates.opening - dates.today;
  const isSessionStarted = dates.firstSession - dates.today <= 0;

  // ["오픈 예정", "마감 임박", "모집 마감", "대기 가능", "앵콜 가능"]
  const filterObj = {
    openPromise: [false, "오픈 예정", "#111111"],
    atteneeAlmostFull: [false, "마감 임박", "#D01010"],
    caseOver: [false, "모집 마감", "#111111"],
    canWait: [false, "대기 가능", null],
    canRedo: [false, "앵콜 가능", null],
  };

  const filterCase = {
    openPromise: dateLeft > 0,
    atteneeAlmostFull: attendeeLeft < 5,
    caseOver: attendeeFull || dateLeft <= 0 || isSessionStarted,
    canWait: attendeeFull && dateLeft > 0 && !isSessionStarted,
    canRedo: (dateLeft <= 0 || isSessionStarted) && !attendeeFull,
  };

  for (const filter in filterObj) {
    if (filterCase[filter]) {
      let currentObj = filterObj[filter];
      currentObj[0] = true;

      result.push({ text: currentObj[1], color: currentObj[2] });
    }
  }

  return result;
};

export { filteringMeetup, formatYYYYMMDD };
