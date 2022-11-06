type Props = {
  children: React.ReactNode;
};

const TitleTwo: React.FC<Props> = (props) => {
  return <h2>{props.children}</h2>;
};

export default TitleTwo;
