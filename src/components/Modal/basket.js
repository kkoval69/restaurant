import React from 'react';
import BasketItem from "./basket_item";
import {calcTotalPrice} from "../utils";
import {useDispatch, useSelector} from "react-redux";

const Basket = ({items,onClick}) => {

    return (
        <div className="basket_modal">
            <h2>Корзина</h2>
            <div className="basket_cards">
                {
                    items.length>0?items.map((tovar)=><BasketItem
                        key={tovar.id}
                        name={tovar.name}
                        price={tovar.price}
                        image={tovar.image}
                        id={tovar.id}
                        />)
                        :
                        <h3> Пусто:(</h3>
                }
            </div>
            {
                items.length>0?
                    <div className="order">
                        <div className="order_price">
                            {calcTotalPrice(items)} $
                        </div>
                        <div className="order_btn" onClick={onClick}>
                            Оформить заказ
                        </div>
                    </div>
                    :null
            }

        </div>
    );
};

export default Basket;