const categoriesArray = [
  {
    name: "TagLove",
    category: "categoryLove",
    salonCategory: "사랑과 연애",
    color: "#EC5A51",
  },
  {
    name: "TagMovie",
    category: "categoryMovie",
    salonCategory: "영화와 넷플릭스",
    color: "#2947B2",
  },
  {
    name: "TagCareer",
    category: "categoryCareer",
    salonCategory: "일과 커리어",
    color: "#47525D",
  },
  {
    name: "TagLifestyle",
    category: "categoryLifestyle",
    salonCategory: "라이프스타일",
    color: "#4CAB61",
  },
  {
    name: "TagPhilosophy",
    category: "categoryPhilosophy",
    salonCategory: "사유의 확장",
    color: "#F8A224",
  },
  {
    name: "TagMusic",
    category: "categoryMusic",
    salonCategory: "음악과 OST",
    color: "#39BEA6",
  },
  {
    name: "TagRelationship",
    category: "categoryRelationship",
    salonCategory: "자아와 관계",
    color: "#A775DA",
  },
  {
    name: "TagWriting",
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
