import { motion } from "framer-motion"
import Backdrop from "../Backdrop"
import { IoClose } from "react-icons/io5";
import './modal.css'

const dropIn = {
    hidden: {
        y: "100vh",
        opacity: 0,
    },
    visible: {
        y:"0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}

const Modal = ({handleClose}) =>{
    return(
        <Backdrop >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ul className="top">
                    <li className="sent_ok">
                        <span className="notification-text">
                            Sent successfully ! 🚀
                        </span> 
                        <div 
                        className="close"
                        onClick={handleClose}>
                            < IoClose />
                        </div>
                    </li>
                </ul>
            </motion.div>
        </Backdrop>
    )
}

export default Modal