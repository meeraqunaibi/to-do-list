import "./PopUpDeleteMSG.css";
import { WarningOctagon } from "phosphor-react";
const DeletePopUp = (props) => {
  const destroyPopUp = () => {
    props.setshowDeletePoopUp(false);
  };
  return (
    <div className="containerdelete">
      <div className="popupdelete">
        <>
          <div className="headingdelete">
            <WarningOctagon className="icon" size={32} />
            <h3>Are you sure tou want to delete this task?</h3>
          </div>
          <div className="btndelete">
            <button
              className="deletebtn"
              onClick={() => {
                console.log(props.id);
                props.delete(props.id);
                destroyPopUp();
              }}
            >
              Delete
            </button>
            <button className="TheDeletecancelpopup" onClick={destroyPopUp}>
              Cancel
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default DeletePopUp;
