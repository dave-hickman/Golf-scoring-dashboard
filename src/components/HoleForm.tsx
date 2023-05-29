import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import "../holeForm.css"

interface HoleFormProps {
  holeNumber: number;
  setRoundScore: Dispatch<SetStateAction<number>>;
  setStrokeIndex: Dispatch<SetStateAction<Array<string>>>;
  setFairways: Dispatch<SetStateAction<number>>;
  setGreens: Dispatch<SetStateAction<number>>;
  setPutts: Dispatch<SetStateAction<Array<string>>>;
}

const HoleForm = ({
  holeNumber,
  setPutts,
  setFairways,
  setRoundScore,
  setGreens,
  setStrokeIndex,
}: HoleFormProps) => {
  const [holeFairway, setHoleFairway] = useState("");
  const [holeScore, setHoleScore] = useState("");
  const [holeGreen, setHoleGreen] = useState("");
  const [holeIndex, setHoleIndex] = useState("");
  const [holePutts, setHolePutts] = useState("");
  const [holePar, setHolePar] = useState("");

  const resetForm = () => {
    setHolePar("");
    setHoleIndex("");
    setHoleScore("");
    setHolePutts("");
    setHoleFairway("");
    setHoleGreen("");
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPutts((currentPutts) => [...currentPutts, holePutts]);
    if (holeFairway === "yes") {
      setFairways((currentFairways) => currentFairways + 1);
    }
    if (holeGreen === "yes") {
      setGreens((currentGreens) => currentGreens + 1);
    }
    setRoundScore((currentScore) => Number(currentScore) + Number(holeScore));
    setStrokeIndex((currentStrokeIndex) => [...currentStrokeIndex, holeIndex]);
    resetForm();
    if (holeNumber === 1) {
      navigate("/new-round/scores/2");
    }
    if (holeNumber === 18) {
      navigate("/new-round/scores/result");
    } else {
      navigate(`/new-round/scores/${holeNumber + 1}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Hole {holeNumber}</h2>
      <label htmlFor="hole-par">Par:</label>
      <select value={holePar} onChange={(e) => setHolePar(e.target.value)} id="hole-par">
        <option value="">{""}</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label htmlFor="hole-stroke-index">Stroke Index:</label>
      <input value={holeIndex}
        onChange={(e) => setHoleIndex(e.target.value)}
        type="number"
        id="hole-stroke-index"
      />
      <label htmlFor="hole-shots">Shots:</label>
      <input value={holeScore}
        onChange={(e) => setHoleScore(e.target.value)}
        type="number"
        id="hole-shots"
      />
      <label htmlFor="hole-putts">Putts:</label>
      <input value={holePutts}
        onChange={(e) => setHolePutts(e.target.value)}
        type="number"
        id="hole-putts"
      />
      <label htmlFor="hole-fairway">Fairway hit?:</label>
      <select value={holeFairway}
        onChange={(e) => setHoleFairway(e.target.value)}
        id="hole-fairway"
      >
        <option value="">{""}</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label htmlFor="hole-green-in-reg">Green in regulation?:</label>
      <select value={holeGreen}
        onChange={(e) => setHoleGreen(e.target.value)}
        id="hole-green-in-reg"
      >
        <option value="">{""}</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <button>Submit Score</button>
    </form>
  );
};

export default HoleForm;
