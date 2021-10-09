import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "./Percent.module.css";

const Percent = () => {
  const dispatch = useDispatch();
  const currentNumber = useSelector((state) => state.currentNumber);

  return (
    <>
      <div
        onClick={() => dispatch({ type: "REMOVE_LAST_CHAR" })}
        className={styles.percent}
        style={{
          color: currentNumber.toString().length >= 30 ? "red" : "white",
        }}
      >
        ⟶
      </div>
    </>
  );
};

export default Percent;
