import { WarningOctagon } from "phosphor-react";
import "./PopUpErrorMsg.css";
const PopUpErrorMsg = (props) => {
  let theError;
  if (props.data === "select") {
    theError = "selecting the category of this task!";
  } else if (props.data === "title") {
    theError = "entering the title of this task!";
  }
  const destroyPopUp = () => {
    props.setTheError("");
  };
  return (
    <div className="container">
      <div className="popup">
        {theError !== "" ? (
          <>
            <div className="heading">
              <WarningOctagon className="icon" size={32} />
              <h3>Error: Empty Field!</h3>
            </div>
            <p>You can't submit the form without {theError}</p>
            <div className="last-row">
              <p>Please fill all fields!</p>
              <div className="btn">
                <button onClick={destroyPopUp}>Ok</button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default PopUpErrorMsg;
