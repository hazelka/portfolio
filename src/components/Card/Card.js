import myAvatar from '../../assets/myAvatar.png';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <img className="card-img" src={myAvatar} alt="avatar"></img>
      <div className="card-name">
        <div>Hazel</div>
        <div>Feng</div>
      </div>
      <hr className="card-hr"/>
      <div className="card-title">Full Stack Developer</div>
    </div>
  );
};

export default Card;