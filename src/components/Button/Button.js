import './Button.css';

const Button = ({ value, href, newTab }) => (
  <a 
    href={href} 
    target={newTab ? "_blank" : "_self"} 
    rel="noreferrer"
  >
    <span className='button'>{value.toUpperCase()}</span>
  </a>
);

export default Button;