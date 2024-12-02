import { Link } from "react-router-dom";
import SortIcon from "../../assets/images/sort-24px.svg";
import ArrowIcon from "../../assets/images/arrow.svg";
import "./SpotsTable.scss";

export default function SpotsTable({ spots }) {
  const headers = [
    { db_keys: ["name"], text: "Name" },
    { db_keys: ["address"], text: "Address" },
    { db_keys: ["type"], text: "Type" },
    { db_keys: ["hours"], text: "Hours" },
    { db_keys: ["weather_coverage"], text: "Covered?" },
  ];

  return (
    <table className={`table`} style={{ "--column-count": headers.length }}>
      <thead>
        <tr className="table__headers">
          {headers.map((header, index) => (
            <th key={index} className="table__header">
              <div className="table__header-text">
                {header.text}{" "}
                <img className="table__header-sort" src={SortIcon} alt="sort" />
              </div>
            </th>
          ))}
          <th className="table__header">
            <div className="table__header-text">Info</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {spots.map((item, index) => (
          <tr key={index} className="table__item">
            {headers.map((header) => {
              return header.db_keys.map((key) => {
                return key === "name" ? (
                  <td key={index} className="table__cell">
                    <Link to={`${item.id}`} className="table__link">
                      {item[key]}
                    </Link>
                  </td>
                ) : (
                  <td key={index} className="table__cell">
                    {item[key]}
                  </td>
                );
              });
            })}
            <td key={index} className="table__cell">
              <Link to={`${item.id}`} className="table__link">
                <img
                  className="table__page-link"
                  src={ArrowIcon}
                  alt="forward arrow"
                />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
