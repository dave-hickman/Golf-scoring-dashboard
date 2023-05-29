interface ScoresProps {
  par: string;
  putts: number;
  roundScore: number;
  strokeIndex: Array<string>;
  fairways: number;
  greens: number;
  handicap: string;
}

const RoundStats = ({
  par,
  putts,
  roundScore,
  strokeIndex,
  fairways,
  greens,
  handicap,
}: ScoresProps) => {
  const netScore = roundScore - Number(handicap) - Number(par);
  let positiveNegative;
  if (netScore > 0) {
    positiveNegative = "+";
  }

  return (
    <>
      <p>Par for the course: {par}</p>
      <p>Gross Score: {roundScore}</p>
      <p>
        Net Score: {positiveNegative}
        {roundScore - Number(handicap) - Number(par)}
      </p>
      <p>Fairways hit: {fairways}</p>
      <p>Greens in regulation: {greens}</p>
    </>
  );
};

export default RoundStats;
