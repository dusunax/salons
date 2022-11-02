import ButtonCategory from "../../atoms/button/button-category";

const Categories = (props) => {
  const categories = ["종류", "종류", "종류", "종류"];
  return (
    <div>
      {categories.map((content) => (
        <ButtonCategory content={content} />
      ))}
    </div>
  );
};

export default Categories;
