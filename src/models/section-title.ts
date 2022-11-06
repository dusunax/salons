class SectionTitle {
  filterKeywords: string[];
  length: number;
  filterSection: boolean;
  pagenation: boolean;
  text: string;
  title: string;

  constructor() {
    this.filterKeywords = ["openMeetup"];
    this.length = 1;
    this.filterSection = false;
    this.pagenation = false;
    this.text = "정기";
    this.title = "진행중인 정기 모임";
  }
}

export { SectionTitle };
