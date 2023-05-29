import { useState } from "react";
import RoundHeader from "../components/RoundHeader";
import GolfCourse from "../components/GolfCourse";
import Scores from "./Scores";
import { Route, Routes } from "react-router-dom";

const StartRound = () => {
  const [courseName, setCourseName] = useState("");
  const [par, setPar] = useState("");
  const [handicap, setHandicap] = useState("");
  const [courseInfo, setCourseInfo] = useState({});

  console.log(courseName, par, handicap, courseInfo);
  return (
    <main>
      <RoundHeader courseName={courseName} />
      <Routes>
        <Route
          path="/"
          element={
            <GolfCourse
              courseName={courseName}
              par={par}
              handicap={handicap}
              setCourseName={setCourseName}
              setPar={setPar}
              setHandicap={setHandicap}
              setCourseInfo={setCourseInfo}
            />
          }
        />
        <Route
          path="scores/*"
          element={<Scores par={par} handicap={handicap} />}
        />
      </Routes>
    </main>
  );
};

export default StartRound;
