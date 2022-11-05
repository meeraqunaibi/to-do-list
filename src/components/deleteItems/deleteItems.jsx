import './deleteItems.css'
const Popup = ({ handleDeleteTrue, handleDeleteFalse }) => {

    return (
        <div className="modal">
            <div className="modal_box">
                <p>Are you sure want to delete this item </p>
                <div>

                    <button onClick={handleDeleteFalse} className='modal_cancel'>Cancel</button>
                    <button onClick={handleDeleteTrue} className="modal_delete">Confirm </button>
                </div>
            </div>


        </div>


    )
}
export default Popup;