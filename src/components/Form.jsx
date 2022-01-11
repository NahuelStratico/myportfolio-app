import { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion, AnimatePresence } from "framer-motion"
import Button from '../components/styled'
import Modal from '../components/Modal/index'
import '../pages/styles/contact.css'

const Form = () => {

    const [ openMessage, setOpenMessage ] = useState(false)

    const close = () => {
        setOpenMessage(false)
        console.log('click close')
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
                        <Button type='submit' value="Send"> send message </Button>

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