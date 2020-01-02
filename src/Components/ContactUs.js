import React from 'react';
import './ContactUs.css';

function ContactUs(props){
    return(
        <div className='contact-box-container'>
            <div className='contact-form'>
                <form>
                    <div className='email-header'>
                        <div className='email-address-container'>
                            email:
                            <input type='text' id='emailAdress'></input>
                        </div>
                        <div className='email-subject-container'>
                            subject:
                            <input type='text' id='emailSubject'></input>
                        </div>
                    </div>
                    <div className='email-contant'>
                        <textarea id='email-content-text' rows='10' cols='45' placeholder='Email Content'></textarea>
                    </div>
                </form>
            </div>
            <div className='office-map'>

            </div>
        </div>
    );
}

export default ContactUs;