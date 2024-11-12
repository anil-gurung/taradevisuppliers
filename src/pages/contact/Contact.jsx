import './contact.css';
import Headering from '../../components/Headering';
import contactImg from '../../assets/contact.jpg';
import { IoIosMail } from 'react-icons/io';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsMessenger } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <Headering title="Contact Us" image={contactImg}></Headering>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a
              href="mailto:taradevisuppliers@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoIosMail />
            </a>
            <a
              href="http://m.me/taradevisuppliers"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger />
            </a>
            <a
              href="https://wa.me/+9779846109653"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiWhatsappFill />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
