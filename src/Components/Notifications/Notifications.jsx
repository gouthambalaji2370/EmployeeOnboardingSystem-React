import {React} from 'react';
import './Notifications.css';


export default function Notifications(props) {
    return (
        <div id="myModal" className="modal fades" onClick={props.onClose}>
            <div className="modal-content">
                <div className="modal-body">
                    <p id="error" className="alert-text">{props.Content}</p>
                </div>
                <div className="modal-foot">
                    <button type="button" className="button-group margin-60-left" onClick={props.onClose} id="closemodal">Close</button>
                </div>
            </div>
        </div>)
}