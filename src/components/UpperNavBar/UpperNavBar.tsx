import React from "react";
import dlsudLogo from "../../assets/dlsud_logo.png";
import registrarLogo from "../../assets/registrar_logo.png";
import DateTimeDisplay from "../DateTimeState/DateTimeState";
import styles from "./UpperNavBar.module.css";

const UpperNavBar: React.FC = () => {
  return (
    <div className={styles.UpperNavBar}>
      <div className={styles.Container}>
        <div className={styles.dateAndTime}>
          <DateTimeDisplay />
        </div>

        <img
          className={styles.registrarLogo}
          alt="Registrar logo"
          src={registrarLogo}
        />

        <img className={styles.dlsudLogo} alt="Dlsud logo" src={dlsudLogo} />
      </div>
    </div>
  );
};

export default UpperNavBar;
