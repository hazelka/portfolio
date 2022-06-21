import './Square.css';

const Square = ({ size }) => (
  <span className="square" style={{ width: size, height: size }}></span>
);

export default Square;