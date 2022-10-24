import './popup.css';
export default function Popup({ show, title, body, onYes, onNo }) {
    if(!show){
        return <></>;
    }
  return (
    <div className="overlay">
        <div className="popup__wrapper">
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="action__buttons">
                <button onClick={onYes}>Yes</button>
                <button onClick={onNo}>No</button>
            </div>
        </div>
    </div>
  )
}
 