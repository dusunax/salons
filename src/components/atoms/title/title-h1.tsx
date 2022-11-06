type Props = {
  children: React.ReactNode;
};

const TitleOne: React.FC<Props> = (props) => {
  return <h1>{props.children}</h1>;
};

export default TitleOne;
