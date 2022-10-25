import "./popup.css";
import ExcMark from "../../assets/exclamation.svg";
export default function Popup({ show, title, body, onYes, onNo }) {
  if (!show) {
    return <></>;
  }
  return (
    <div className="overlay">
      <div className="popup__wrapper">
        <img
          style={{ width: "10vw", height: "10vw" }}
          src={ExcMark}
          alt="alert"
        />
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="action__buttons">
          <button onClick={onYes}>Yes, Delete!</button>
          <button onClick={onNo}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
