class Category {
  active: boolean;
  category: string;
  color: string;
  name: string;
  salonCategory: string;
  tag: string;

  constructor() {
    this.active = false;
    this.category = "categoryAll";
    this.color = "#000000";
    this.name = "all";
    this.salonCategory = "전체";
    this.tag = "TagAll";
  }
}

export { Category };
