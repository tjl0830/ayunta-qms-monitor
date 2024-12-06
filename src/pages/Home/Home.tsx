// Home.tsx
import LowerNavBar from "../../components/LowerNavBar/LowerNavBar";
import UpperNavBar from "../../components/UpperNavBar/UpperNavBar";
import MainContent from "../../components/DisplayCounter/MainContent";
import Styles from "./Home.module.css";

function Home() {
  return (
    <div className={Styles.DisplayContainer}>
      <div className={Styles.UpperNavBar}>
        <UpperNavBar />
      </div>

      <div className={Styles.MainContainer}>
        <MainContent />
      </div>
      <div className={Styles.LowerNavBar}>
        <LowerNavBar />
      </div>
    </div>
  );
}

export default Home;
