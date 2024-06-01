import React from "react";
import { ReactComponent as Fav } from "../../assets/icons/favorite.svg";
import { ReactComponent as Gift } from "../../assets/icons/gift.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import "./card.css";
import img from "../../assets/images/mega.png";
function Card() {
  return (
    <div className="card">
      <div className="add_favorite">
        <Fav />
      </div>
      <div className="card_img">
        <img src={img} alt="" />
      </div>
      <div className="card_desc">
        <div className="card_desc_t">
          <p>Кэшбэк</p>
        </div>
        <div className="card_amount">
          <p>до 00%</p>
          <div>
            <Gift />
            <Share />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
