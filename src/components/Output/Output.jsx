import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Output.module.css";

const Output = () => {
  const output = useSelector((state) => state.output);
  const currentNumber = useSelector((state) => state.currentNumber);
  const typingNewNumber = useSelector((state) => state.typingNewNumber);
  const result = useSelector((state) => state.result);

  console.log("output");
  console.log(output);
  if (result != 0 && Number(currentNumber) === 0 && Number(output) === 0) {
    return (
      <div
        className={styles.output}
        style={{
          fontSize:
            result.toString().length < 7
              ? "90px"
              : result.toString().length < 8
              ? "80px"
              : result.toString().length < 9
              ? "70px"
              : result.toString().length < 10
              ? "60px"
              : result.toString().length < 12
              ? "50px"
              : result.toString().length < 15
              ? "40px"
              : result.toString().length < 20
              ? "30px"
              : "20px",
        }}
      >
        {result}
      </div>
    );
  } else if (
    output.toString().length < 30 &&
    currentNumber.toString().length < 30
  ) {
    return (
      <>
        {typingNewNumber ? (
          <div
            className={styles.output}
            style={{
              fontSize:
                currentNumber.toString().length < 7
                  ? "90px"
                  : currentNumber.toString().length < 8
                  ? "80px"
                  : currentNumber.toString().length < 9
                  ? "70px"
                  : currentNumber.toString().length < 10
                  ? "60px"
                  : currentNumber.toString().length < 12
                  ? "50px"
                  : currentNumber.toString().length < 15
                  ? "40px"
                  : currentNumber.toString().length < 20
                  ? "30px"
                  : "20px",
            }}
          >
            {currentNumber}
          </div>
        ) : (
          <div
            className={styles.output}
            style={{
              fontSize:
                output.toString().length < 7
                  ? "90px"
                  : output.toString().length < 8
                  ? "80px"
                  : output.toString().length < 9
                  ? "70px"
                  : output.toString().length < 10
                  ? "60px"
                  : output.toString().length < 12
                  ? "50px"
                  : output.toString().length < 15
                  ? "40px"
                  : output.toString().length < 20
                  ? "30px"
                  : "20px",
            }}
          >
            {output}
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className={styles.output} style={{ fontSize: "35px" }}>
        Завелике число
      </div>
    );
  }
};

export default Output;
