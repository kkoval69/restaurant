import React, {useState} from 'react';
import card_img from '../../img/basket_card.png';
import {deleteItemFromCart, IncrementR} from "../../redux/cart/reducer";
import {useDispatch, useSelector} from "react-redux";
import {calcTotalPrice} from "../utils";


const BasketItem = ({name, price, image, id}) => {
    const [colvo,setColvo]= useState(1)
    const [cost,setCost]=useState(price)
    const dispatch=useDispatch();
    function Decrement(){
        if (colvo >1){
            setColvo(colvo-1)
            setCost(cost-price)
        }
        else return  1
    }
    function Increment(){
        setColvo(colvo+1)
        setCost(cost+price)

    }
    return (
        <div className="basket_card">
            <div className="card_desc">
                <img src={card_img}/>
                <div className="basket_card_txt">
                    <h1 >{name}</h1>
                    <p>Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто</p>
                </div>
            </div>

            <div className="colvo">
                <div className="decr_incr" onClick={()=>Decrement()}>
                    <i className="bi bi-dash-circle" ></i>
                </div>
                <p>{colvo}</p>
                <div className="decr_incr"  onClick={()=> Increment()}>
                    <i className="bi bi-plus-circle"></i>
                </div>
            </div>
            <div className="price">
                {cost}$
            </div>
            <div className="del_card">
                <i className="bi bi-x-circle" onClick={()=>dispatch(deleteItemFromCart(id))}></i>
            </div>
        </div>
    );
};

export default BasketItem;