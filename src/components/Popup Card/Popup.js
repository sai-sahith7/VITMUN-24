import "./Popup.css";
import { NavLink } from "react-router-dom";

function Popup(props) {
  return (
    <div className="popup-container flex-container-column">
      <div className="popup-card">
        <div className="popup-header flex-container-row">
          <img
            onClick={props.toggleShowPopup}
            className="cross-button"
            src="/images/x.png"
            alt="cross"
          />
        </div>
        <div className="popup-form flex-container-column">
          <NavLink to="/internal">
            <button className="popup-button vit-vellore-button">
              VIT VELLORE STUDENTS
            </button>
          </NavLink>
          <NavLink to="/internal">
            <button className="popup-button">EXTERNAL PARTICIPANTS</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Popup;
