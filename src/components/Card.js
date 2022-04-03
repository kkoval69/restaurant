import React from 'react';
import card from "../img/card.png";
import {useDispatch,useSelector} from "react-redux";
import {deleteItemFromCart, getTovar, setItemInCart} from "../redux/cart/reducer";


const Card = (tovar) => {
    const {
        id,
        name,
        price,
        description,

    } = tovar;
    const dispatch=useDispatch();
    const items = useSelector(state=> state.cart.itemsInCart)
    const isItemInCart=items.some(item=>item.id===tovar.id);


    const handleClick=(e)=>{
        e.stopPropagation();
        if(isItemInCart){
            dispatch(deleteItemFromCart(tovar.id));
        }else{
            dispatch(setItemInCart(tovar))
        }

    }

    return (
        <div className="card">
            <img src={card}/>
            <div className="name_weight">
                <div className="name">
                    {name}
                </div>
                <p className="weight">Вес: 225г</p>
            </div>

            <div className="descriprion">
                {description}
            </div>
{/*            <button  onClick={() => addItem(item)}>dads</button>*/}
            <div className="price_btn">
                <div className="price">
                    {price}
                </div>
                <div className="btn_basket" onClick={handleClick}>
                    <div className="btn_basket_text" >

                        {isItemInCart?'Убрать':'В корзину'}
                    </div>
                    <div className="bi_bask">
                        {isItemInCart? <i className="bi bi-cart-check"></i>:<i className="bi bi-cart"></i>}
                    </div>
                </div>
            </div>

        </div>
    );
};



export default Card;