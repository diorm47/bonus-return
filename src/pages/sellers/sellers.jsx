import React from "react";
import "./sellers.css";
import online from "../../assets/icons/online.png";
import right_arrow from "../../assets/icons/Right Arrow.png";
import Card from "../../components/card/card";
import megamarket from "../../assets/images/mega.png";
import { ReactComponent as TalkToUs } from "../../assets/icons/talk-tous.svg";

function Sellers() {
  return (
    <>
      <div className="sellers_header container">
        <div className="sellers_header_left">
          <div className="home_header_left_title">
            <h2>
              РешаеМ задачи бизнеса используя <br />
              кэшбэк Bonus ПРОМОКОДЫ
            </h2>
            <p>
              Мы помогаем брендам и селлерам увеличивать прибыль <br /> с
              помощью перфоманс-продуктов
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
              <h4>
                подключено <br /> селлеров
              </h4>
            </div>
            <div className="home_header_left_stat_item home_header_left_stat_item_online">
              <h3>463</h3>
              <div>
                <img src={online} alt="" />
                <p>online</p>
              </div>
              <h4>
                подключено <br /> бренодов
              </h4>
            </div>
          </div>
          <div className="sellers_header_left_filters">
            <h3>Механики мотивации конечных потребителей товаров</h3>
            <div class="stores_rev_filter main_p container">
              <p>Скидки</p>
              <p>Промокоды</p>
              <p>Акции</p>
              <p>Конкурсы</p>
              <p>Бонусы с чека</p>
              <p>Кэшбек</p>
              <p>Распродажи</p>
              <p>Коды с упаковки</p>
              <p>Подарок от бренда</p>
            </div>
          </div>
        </div>
        <div className="sellers_header_date">
          <div className="sellers_header_date_title">
            <h2>Дата и время</h2>
            <h3>Месяц</h3>
          </div>
          <div className="sellers_header_dates">
            <div className="sellers_header_date_selected">
              <p>ПН</p>
              <span>18</span>
            </div>
            <div>
              <p>ВТ</p>
              <span>19</span>
            </div>
            <div>
              <p>СР</p>
              <span>20</span>
            </div>
            <div className="sellers_header_date_disabled">
              <p>ЧТ</p>
              <span>21</span>
            </div>
            <div>
              <p>ПТ</p>
              <span>22</span>
            </div>
            <div className="sellers_header_date_weekend">
              <p>СБ</p>
              <span>23</span>
            </div>
            <div className="sellers_header_date_weekend">
              <p>ВС</p>
              <span>24</span>
            </div>
          </div>
          <div className="sellers_header_hours">
            <div>
              <p>09:00</p>
            </div>
            <div className="sellers_header_hour_selected">
              <p>12:00</p>
            </div>
            <div>
              <p>14:00</p>
            </div>
            <div>
              <p>16:00</p>
            </div>
            <div>
              <p>18:00</p>
            </div>
            <div>
              <p>20:00</p>
            </div>
          </div>
          <div className="sellers_header_date_consult">
            <h4>Записаться на консультацию</h4>
            <div className="exchange_money_input">
              <input
                type="text"
                className="main_input"
                placeholder="Введите свой e-mail"
              />
              <button>
                <img src={right_arrow} alt="" />
              </button>
            </div>
            <p>
              Каждый бизнес уникален! Успешные кейсы — это результат, который
              виден только в конце пути!
            </p>
            <p>
              {" "}
              Обсудите с нами возможности роста продаж вашего бизнеса за 30
              минут!
            </p>
          </div>
        </div>
      </div>
      <div className="sellers_quests container">
        <h2>Сравнение кэшбек механик и обычной рекламы</h2>
      </div>

      {/* did */}

      <div className="cashback_stores_cards container">
        <div className="block_title">
          <h2>Магазины с кэшбэком</h2>
        </div>
        <div className="cashback_stores_cards_list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          <div className="all_stores">
            <div>
              <h5>Более 3 тыс.</h5>
              <p>
                интернет-магазинов <br />и сервисов с кэшбэком
              </p>
              <button>Все магазины</button>
            </div>
          </div>
        </div>
      </div>

      <div className="home_navigation_right sellers_promos container">
        <div className="home_navigation_title">
          <h3>Лучшие промокоды и акции</h3>
          <p>Смотреть все</p>
        </div>
        <div className="best_promos">
          <div className="best_promo">
            <div className="best_promo_title">
              <img src={megamarket} alt="" />
              <div>
                <span>Кэшбэк в “магазин”</span> <br />
                <p>0%</p>
              </div>
            </div>
            <div className="best_promo_desc">
              <div>
                <h2>Распродажа товаров!</h2>
                <p>Действует с 00.00.0000 до 00.00.0000</p>
              </div>
              <button>Перейти к акции</button>
            </div>
          </div>
          <div className="best_promo">
            <div className="best_promo_title">
              <img src={megamarket} alt="" />
              <div>
                <span>Кэшбэк в “магазин”</span> <br />
                <p>0%</p>
              </div>
            </div>
            <div className="best_promo_desc">
              <div>
                <h2>Распродажа товаров!</h2>
                <p>Действует с 00.00.0000 до 00.00.0000</p>
              </div>
              <button>Перейти к акции</button>
            </div>
          </div>
          <div className="best_promo">
            <div className="best_promo_title">
              <img src={megamarket} alt="" />
              <div>
                <span>Кэшбэк в “магазин”</span> <br />
                <p>0%</p>
              </div>
            </div>
            <div className="best_promo_desc">
              <div>
                <h2>Распродажа товаров!</h2>
                <p>Действует с 00.00.0000 до 00.00.0000</p>
              </div>
              <button>Перейти к акции</button>
            </div>
          </div>
          <div className="best_promo">
            <div className="best_promo_title">
              <img src={megamarket} alt="" />
              <div>
                <span>Кэшбэк в “магазин”</span> <br />
                <p>0%</p>
              </div>
            </div>
            <div className="best_promo_desc">
              <div>
                <h2>Распродажа товаров!</h2>
                <p>Действует с 00.00.0000 до 00.00.0000</p>
              </div>
              <button>Перейти к акции</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sellers;
