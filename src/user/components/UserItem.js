import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Link to={`/${props.id}/places`}>
        <article>
          <div className="user-item__image">
            <Avatar
              src={props.image}
              image={`https://placediscapi.onrender.com/${props.image}`}
              alt={props.name}
            />
            <div className="user-item__info">
              <h2 className="name-hidden">{props.name}</h2>
              <h3 className="placeCount-hidden">
                {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default UserItem;
