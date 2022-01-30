import React, {useState} from "react";
import "./index.css";

const Modal = ({children, bottonTitle}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="modal__wrapper">
            <button onClick={()=>setIsOpen(!isOpen)}>
                {bottonTitle}
            </button>
            {
                isOpen ? 
                <div 
                className="modal__container"
                onClick={()=>setIsOpen(!isOpen)}>
                    <div className="modal__contents">
                        {children}
                        <button
                            className="close__button"
                            onClick={()=>setIsOpen(!isOpen)}>
                            X
                        </button>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default Modal;