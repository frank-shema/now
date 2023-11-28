import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="contactsection" data-scroll-to="contactSectionContainer">
      <div className="headline-parent">
  
        <div className="contactform-parent">
          <div className="contactform">
            <div className="formcontent">
              <input className="input" type="text" placeholder="Name" />
              <input className="input1" type="text" placeholder="Email" />
              <textarea className="textarea" placeholder="Message" />
            </div>
            <button className="button3">
              <div className="send">Send</div>
            </button>
          </div>
          <img
            className="undraw-contact-us-re-4qqt-1-icon"
            alt=""
            src="/undraw-contact-us-re-4qqt-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
