import Header from "../components/Header";
import HomeDashboard from "../components/HomeDashboard";
import Start from "../components/Start";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Header />
      <Link to="/new-round">
        <Start />
      </Link>
      <HomeDashboard />
    </main>
  );
};

export default Home;
