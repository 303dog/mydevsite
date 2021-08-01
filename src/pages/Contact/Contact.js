import React, { useReducer } from "react";
import emailjs from "emailjs-com";
import { SectionTitle } from '../../styles';
import './Contact.css';
import { Redirect, Link} from 'react-router-dom';



const initialState = {
    first: "",
    last: "",
    email: "",
    tel: "",
    message: "",
};


const reducer = (state, action) => {
    if (action.type === "reset") {
        return initialState;
    }
    
    const result = { ...state };
    result[action.type] = action.value;
    return result;
};

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { first, last, email, tel, message } = state;

    const handleSubmit = e => {
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
              result.text ==="OK" ? alert("THANK YOU! Your request has been submitted! I will be in touch shortly.") : alert("unsuccessful submission, please try again.")
    
            }, (error) => {
              console.log(error.text);
            }
            );
        /* fetch api */

        /* clear state */
        dispatch({ type: "reset" });
        <Redirect to='/' />
    };



    const onChange = e => {
        const { name, value } = e.target;
        dispatch({ type: name, value });
    };

    

    return (
        <>
       
        <SectionTitle>Contact Me</SectionTitle>
        <div className='request__container'>
        <form className='request__form' onSubmit={handleSubmit}>
            <div className='request__row'>
                <label HTMLfor='f_name' className='request__label'>
                    First Name:
                    <input className='request__input' type='text' value={first} name="first" onChange={onChange} />
                </label>
           
                <label HTMLfor='l_name' className='request__label'>
                    Last Name:
                    <input className='request__input' value={last} type='text' name="last" onChange={onChange} />
                </label>
           
                <label HTMLfor='email' className='request__label'>
                    <i class="fas fa-at"></i>email
                    <input className='request__input' type='email' value={email} name="email" onChange={onChange} />
                </label>
      
                <label HTMLfor='tel' className='request__label'>
                    <i class="fas fa-phone-square-alt"></i>
                    <input
                        className='request__input'
                        value={tel}
                        name="tel"
                        type="tel"
                        onChange={onChange}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='###-###-####'
                    />
                </label>
         
                <label HTMLfor='message' className='request__label'>
                    Message:
                    <textarea cols='47' rows='10'maxlength='500' value={message} name="message" onChange={onChange} placeholder='Thank you for your time, please make sure to enter a contact # or email so I can respond back to you!'/>
                </label>
            </div>
            <div className='move'>
            <button>Submit</button>{" "}
            <Link to='/' className='link'>
            GO BACK TO MAIN
            </Link>
            </div>
        </form>
        </div>
        </>
    );
};


export default Signup;