type Props = {
  children: React.ReactNode;
};

const TitleFour: React.FC<Props> = (props) => {
  return <h4>{props.children}</h4>;
};

export default TitleFour;
