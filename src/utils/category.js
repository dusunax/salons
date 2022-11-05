const categoriesArray = [
  {
    name: "love",
    tag: "TagLove",
    category: "categoryLove",
    salonCategory: "사랑과 연애",
    color: "#EC5A51",
  },
  {
    name: "movie",
    tag: "TagMovie",
    category: "categoryMovie",
    salonCategory: "영화와 넷플릭스",
    color: "#2947B2",
  },
  {
    name: "work",
    tag: "TagCareer",
    category: "categoryCareer",
    salonCategory: "일과 커리어",
    color: "#47525D",
  },
  {
    name: "life",
    tag: "TagLifestyle",
    category: "categoryLifestyle",
    salonCategory: "라이프스타일",
    color: "#4CAB61",
  },
  {
    name: "talk",
    tag: "TagPhilosophy",
    category: "categoryPhilosophy",
    salonCategory: "사유의 확장",
    color: "#F8A224",
  },
  {
    name: "music",
    tag: "TagMusic",
    category: "categoryMusic",
    salonCategory: "음악과 OST",
    color: "#39BEA6",
  },
  {
    name: "ego",
    tag: "TagRelationship",
    category: "categoryRelationship",
    salonCategory: "자아와 관계",
    color: "#A775DA",
  },
  {
    name: "write",
    tag: "TagWriting",
    category: "categoryWriting",
    salonCategory: "글쓰기",
    color: "#6792FF",
  },
];

let categoriesMap = new Map();
categoriesArray.map((curr) => {
  categoriesMap.set(curr.salonCategory, { ...curr });
});

export { categoriesMap, categoriesArray };
