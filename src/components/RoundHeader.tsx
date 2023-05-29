interface RoundHeaderProps {
  courseName: string;
}

const RoundHeader = ({ courseName }: RoundHeaderProps) => {
  return <h1>{courseName}</h1>;
};

export default RoundHeader;
