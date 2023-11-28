import Header from "../../components/header/Header";
import "./ContactPage.css";
import ContactForm from "../../components/ContactForm";
const LoginPage = () => {
  return (
    <div className="contactpage">
      <Header />
      <div className="contactcontent">
      
        <ContactForm />
      </div>
    </div>
  );
};

export default LoginPage;
