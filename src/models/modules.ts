// 모듈
export const tag: { text: string; color: string } = { text: "", color: "" };

// 타입
export type Tag = { text: string; color: string };

export type ImageProps = {
  host: {
    introduction: string;
    nickname: string;
    profileImageUrl: string;
    title: string;
  };
  categoryName: string;
  color: string;
  sortStrings: string[];
};

export type Introduce = {
  createdAt: string;
  introduction: string;
  salonCategory: string[];
};

export type filterSelected = {
  closed: boolean;
  location: string | null;
  day: string | null;
};
