class Meetup {
  attendeeCount: number;
  maxCapacity: number;
  briefLocation: string;
  contents: [];
  createdAt: string;
  filter: [
    {
      text: string;
      color: string;
    }
  ];
  host: {
    id: number;
    introduction: string;
    name: string;
    nickname: string;
    profileImageUrl: string;
    title: string;
  };
  id: number;
  openingDate: string;
  price: number;
  sessions: [
    {
      text: string;
      title: string;
    }
  ];
  soldOut: string | null;
  sortStrings: string[];
  tags: {
    dayOfWeek: string[];
    region: string[];
    salonCategory: string[];
  };
  thumbnailUrl: string;
  title: string;
  type: number;

  constructor() {
    this.attendeeCount = 0;
    this.maxCapacity = 12;
    this.briefLocation = "을지로";
    this.contents = [];
    this.createdAt = "2022-10-07T11:21:10+09:00";
    this.filter = [{ text: "모집 마감", color: "#111111" }];
    this.host = {
      id: 7894,
      introduction: "가장 유명한 모임",
      name: "홍길동",
      nickname: "홍길동",
      profileImageUrl: "https://",
      title: "중요한 대표",
    };
    this.id = 705;
    this.openingDate = "2022-10-07T12:00:00+09:00";
    this.price = 171000;
    this.sessions = [{ text: "섹션에 대한 내용", title: "제목" }];
    this.soldOut = null;
    this.sortStrings = ["라이프스타일"];
    this.tags = {
      dayOfWeek: ["일요일"],
      region: ["홍대"],
      salonCategory: ["라이프스타일"],
    };
    this.thumbnailUrl = "https://";
    this.title = "여행사";
    this.type = 1;
  }
}

export { Meetup };
