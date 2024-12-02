import { Link } from "react-router-dom";
import "./SpotsTable.scss";

export default function SpotsTable({ spots }) {
  console.log(spots);
  return (
    <ul className="list">
      {spots.map((item) => (
        <li key={item.id} className="list__item item">
          <div className="item__info">
            <div className="item__info-category">
              <h3 className="item__info-title">SPOT NAME</h3>
            </div>
            <div className="item__info-category">
              <h3 className="item__info-title">SPOT TYPE</h3>
              <p className="item__info-text">
                <span>{item.type}</span>
              </p>
            </div>
            <div className="item__info-category">
              <h3 className="item__info-title">ADDRESS</h3>
              <p className="item__info-text">{`
              ${item.address}
              `}</p>
            </div>
            <div className="item__info-category item__info-category--right">
              <h3 className="item__info-title">HOURS</h3>
              <p className="item__info-text">{`${item.hours}`}</p>
            </div>
          </div>
          <div className="item__actions">
            <button className="item__button">
              <img alt="delete" />
            </button>
            <button className="item__button">
              <img alt="edit" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
