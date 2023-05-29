import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HoleForm from "../components/HoleForm";
import RoundStats from "../components/RoundStats";

interface ScoresProps {
  par: string;
  handicap: string;
}

const Scores = ({ par, handicap }: ScoresProps) => {
  const [roundScore, setRoundScore] = useState(0);
  const [strokeIndex, setStrokeIndex] = useState([]);
  const [fairways, setFairways] = useState(0);
  const [greens, setGreens] = useState(0);
  const [putts, setPutts] = useState([]);

  const holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  console.log(roundScore, strokeIndex, fairways, greens, putts);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HoleForm
            holeNumber={holes[0]}
            setPutts={setPutts}
            setRoundScore={setRoundScore}
            setStrokeIndex={setStrokeIndex}
            setFairways={setFairways}
            setGreens={setGreens}
          />
        }
      />
      {holes.slice(1).map((hole) => (
        <Route
          key={hole}
          path={`/${hole}`}
          element={
            <HoleForm
              holeNumber={hole}
              setPutts={setPutts}
              setRoundScore={setRoundScore}
              setStrokeIndex={setStrokeIndex}
              setFairways={setFairways}
              setGreens={setGreens}
            />
          }
        />
      ))}
      <Route
        path="/result"
        element={
          <RoundStats
            par={par}
            putts={putts}
            roundScore={roundScore}
            strokeIndex={strokeIndex}
            fairways={fairways}
            greens={greens}
            handicap={handicap}
          />
        }
      />
    </Routes>
  );
};

export default Scores;
