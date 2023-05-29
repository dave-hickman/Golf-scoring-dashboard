interface ScoresProps {
  par: string;
  putts: Array<string>;
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
  console.log(strokeIndex)
  const puttsToNumber = putts.map((putt) => Number(putt))
  const averagePutts = (puttsToNumber.reduce((acc, num) => acc + num, 0 ))/puttsToNumber.length 

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
      <p>Average number of putts: {averagePutts}</p>
    </>
  );
};

export default RoundStats;
