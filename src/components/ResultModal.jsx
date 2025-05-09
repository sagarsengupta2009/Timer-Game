import React, { useImperativeHandle, useRef } from "react";

const ResultModal = ({ ref, targetTime, remainingTime, onReset }) => {
  // const dialog = useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     open() {
  //       dialog.current.showModal();
  //     }
  //   }
  // })
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return (
    <dialog ref={ref} className="result-modal">
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
