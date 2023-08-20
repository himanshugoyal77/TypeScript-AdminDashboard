import { Link } from "react-router-dom";
import { menu } from "./../../data";
import "./menu.scss";

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} key={listItem.id} className="listItem">
              <img src={listItem.icon} alt="" className="icon" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menu;
