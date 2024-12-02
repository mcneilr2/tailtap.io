import { Link } from "react-router-dom";
import skateboard from "../../assets/images/button.svg";
import "./SpotsList.scss";

export default function SpotsList({ spots }) {
  return (
    <ul className="list">
      {spots.map((item) => (
        <li key={item.id} className="list__item item">
          <div className="item__info">
            <div className="item__info-category">
              <h3 className="item__info-title">SPOT NAME</h3>
              <p className="item__info-text">
                <span>{item.name}</span>
              </p>
            </div>
            <div className="item__info-category">
              <h3 className="item__info-title">ADDRESS</h3>
              <p className="item__info-text">{`
              ${item.address}
              `}</p>
            </div>
            <div className="item__info-category item__info-category--middle item__info-category--top">
              <h3 className="item__info-title">SPOT TYPE</h3>
              <p className="item__info-text">
                <span>{item.type}</span>
              </p>
            </div>
            <div className="item__info-category item__info-category--middle">
              <h3 className="item__info-title">HOURS</h3>
              <p className="item__info-text">{`${item.hours}`}</p>
            </div>
            <div className="item__info-category item__info-category--right">
              <h3 className="item__info-title">Average Skill Level</h3>
              <p className="item__info-text">{`${item.median_skill_level}`}</p>
            </div>
            <div className="item__info-category item__info-category--right">
              <h3 className="item__info-title">Average Crowding Level</h3>
              <p className="item__info-text">{`${item.occupancy_level}`}</p>
            </div>
          </div>
          <div className="item__actions">
            <Link to={`/spots/${item.id}`} className="item__link">
              <button className="item__button">Find Out More!</button>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
