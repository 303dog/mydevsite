import emailjs from "emailjs-com";
import React from "react";
import { SectionTitle } from '../../styles';
import Layout from '../../components/Layout';
import './ContactMe.css';


export default function ContactMe({user}) {
  
  

  function sendEmail(e) {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_zx7pmmb",
      "template_t1nii0c",
      e.target,
      "user_r1Nh9imI9RSZL9FOKL67l"
      )
      .then(
        (result) => {
          console.log(result.text);
          result.text ==="OK" ? alert("THANK YOU! Your request has been submitted! I will be in touch shortly. Feel free to click 'reset' or just close the browser.") : alert("unsuccessful submission, please try again.")

        }, (error) => {
          console.log(error.text);
        }
        );
      }

  return (
    <>
    <Layout user={user}>
    <SectionTitle>Contact Me</SectionTitle>
    <div className='request__container'>
      <fieldset>
        <form className='request__form' onSubmit={sendEmail}>
          <div className='request__row'>
            <label HTMLfor='f_name' className='request__label'>
              First Name:{" "}
              <input className='request__input' type='text' name='first'  />
            </label>
            <p>
            <label HTMLfor='l_name' className='request__label'>
              Last Name:{" "}
              <input className='request__input' type='text' name='last' />
            </label>
            </p>
            <p>
              <label HTMLfor='tel' className='request__label'>
              <i class="fas fa-phone-square"></i>{" "}
                <input className='request__input' type='tel' id='tel' name='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='###-###-####' />
              </label>
            </p>
            <p>
              <label HTMLfor='email' className='request__label'>
              <h5><i class="fas fa-at"></i>email.com</h5>{" "}
                <input className='request__input' type='email' name='email'/>
              </label>
            </p>
            <p>
              <label HTMLfor='message' className='request__label'>
                Message: <textarea cols='20' rows='10'maxlength='500' name='message' placeholder='Thank you for your time, please make sure to enter a contact # or email so I can respond back to you!'/>
              </label>
            </p>
            <p>
            <input type="submit" value="Submit" />
            <input type='reset' value='reset' />
        
            </p>
          </div>
        </form>
      </fieldset>
    </div>
    </Layout>
    </>
  );
}