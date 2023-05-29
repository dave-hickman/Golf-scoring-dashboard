import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface GolfCourseProps {
  setCourseName: Dispatch<SetStateAction<string>>;
  setHandicap: Dispatch<SetStateAction<string>>;
  setPar: Dispatch<SetStateAction<string>>;
  setCourseInfo: Dispatch<SetStateAction<object>>;
  courseName: string;
  handicap: string;
  par: string;
}

const GolfCourse = ({
  setCourseName,
  setPar,
  setHandicap,
  setCourseInfo,
  par,
  courseName,
  handicap,
}: GolfCourseProps) => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const course = {
      courseName: courseName,
      handicap: handicap,
      par: par,
    };
    setCourseInfo(course);
    navigate("scores");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="course-name">Course:</label>
        <input
          onChange={(e) => setCourseName(e.target.value)}
          id="course-name"
        ></input>
        <label htmlFor="par">Par for the course:</label>
        <input
          onChange={(e) => setPar(e.target.value)}
          id="par"
          type="number"
        ></input>
        <label htmlFor="handicap">Handicap:</label>
        <input
          onChange={(e) => setHandicap(e.target.value)}
          id="handicap"
          type="number"
        ></input>
        <button>Let's golf</button>
      </form>
    </main>
  );
};

export default GolfCourse;
