import { useState, useContext } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from "framer-motion";

import ThemeContext from './Context/ThemeContext';
import Modal from '../components/Modal/index';
import '../pages/styles/contact.css';

const Form = () => {

    const [ openMessage, setOpenMessage ] = useState(false);
    const { theme } = useContext(ThemeContext);

    const close = () => {
        setOpenMessage(false);
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_tqcyrfg', 'template_iw1stl4', e.target, `${process.env.REACT_APP_EMAIL_USER}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

          setOpenMessage(true)
      }

    return(
        <>
            <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="input-group">
                        <input type="text" placeholder='Name' className='input-control'name="name" required />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder='Email' className='input-control' name="user_email" required/>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder='Subject' className='input-control'name="subject" required/>
                    </div>
                    <div className="input-group">
                        <textarea placeholder='Message' className='input-control' name="message" required></textarea>
                    </div>
                    <div className="submit-btn">
                    <motion.button
                    onClick={() => null}
                    className='reset_btn'
                    >
                        <button className={ theme ? 'btn dark' : 'btn'} type='submit' value="Send"> send message </button>

                    </motion.button>
                    <AnimatePresence
                        initial={false}
                        exitBeforeEnter={true}
                        onExitComplete={() => null}
                    >
                        { openMessage && <Modal openMessage={openMessage} handleClose={close}/> }

                    </AnimatePresence>
                    </div>
                </div>
            </form>
                

        </>
    )
}

export default Form