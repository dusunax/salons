type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = (props) => {
  return (
    <>
      <button>{props.children}</button>
    </>
  );
};

export default Button;
