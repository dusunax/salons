type Props = {
  children: React.ReactNode;
};

const TitleThree: React.FC<Props> = (props) => {
  return <h3>{props.children}</h3>;
};

export default TitleThree;
