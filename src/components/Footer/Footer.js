import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>Created by Hazel Feng</div>
      <ul>
        <li>
          <span className="footer-contact-type">PHONE</span>
          <span className="footer-contact-value">778-318-7089</span>
        </li>
        <li>
          <span className="footer-contact-type">EMAIL</span>
          <span className="footer-contact-value">hazel.feng@outlook.com</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;