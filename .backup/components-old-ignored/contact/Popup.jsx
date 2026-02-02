import React from 'react'

function Popup(props) {
  return ( props.trigger)? (
    <div className="popup">
        <div className="popupinner">
            <div className="closebtn" onClick={() => props.setTrigger(false)}>X</div>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup