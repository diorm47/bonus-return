import React from "react";
import "./sellers.css";

function Sellers() {
  return (
    <div className="home_header container">
      <div className="home_header_left">
        <div className="home_header_left_title">
          <h2>
            РешаеМ задачи бизнеса используя <br />
            кэшбэк Bonus ПРОМОКОДЫ
          </h2>
          <p>
            Мы помогаем брендам и селлерам увеличивать прибыль <br /> с помощью
            перфоманс-продуктов
          </p>
        </div>
        <div className="home_header_left_stats">
          <div className="home_header_left_stat_item">
            <h3>491 924</h3>
            <div>
              <p>
                <span>+ 18 724</span> за месяц
              </p>
            </div>
            <h4>кэшбэк за месяц</h4>
          </div>
          <div className="home_header_left_stat_item">
            <h3>14 607</h3>
            <div>
              <p>
                <span>+ 778</span> за месяц
              </p>
            </div>
            <h4>подключено селлеров</h4>
          </div>
          <div className="home_header_left_stat_item">
            <h3>14 607</h3>
            <div>
              <p>
                <span>+ 778</span> за месяц
              </p>
            </div>
            <h4>подключено селлеров</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellers;